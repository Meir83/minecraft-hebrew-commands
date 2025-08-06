#!/usr/bin/env node

import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { MinecraftCommandExecutor } from "./minecraft/CommandExecutor.js";
import { HebrewCommandTranslator } from "./services/HebrewCommandTranslator.js";

/**
 * Minecraft MCP Server
 * 
 * This MCP server provides tools for:
 * - Translating Hebrew commands to Minecraft commands
 * - Executing Minecraft commands via RCON
 * - Getting server status and player information
 * - Managing Minecraft resources
 */
class MinecraftMCPServer {
  private server: McpServer;
  private commandExecutor: MinecraftCommandExecutor;
  private translator: HebrewCommandTranslator;

  constructor() {
    this.server = new McpServer({
      name: "minecraft-mcp-server",
      version: "1.0.0"
    });

    this.commandExecutor = new MinecraftCommandExecutor();
    this.translator = new HebrewCommandTranslator();

    this.setupTools();
    this.setupResources();
  }

  private setupTools() {
    // Tool: Translate Hebrew command to Minecraft command
    this.server.registerTool(
      "translate_hebrew_command",
      {
        title: "Translate Hebrew Command",
        description: "Translate a Hebrew command to Minecraft command syntax",
        inputSchema: {
          hebrewCommand: z.string().describe("The Hebrew command to translate")
        }
      },
      async ({ hebrewCommand }) => {
        try {
          const result = await this.translator.translate(hebrewCommand);
          return {
            content: [{
              type: "text",
              text: `**Minecraft Command:** \`${result.command}\`\n**Description:** ${result.description || 'N/A'}\n**Materials:** ${result.materials?.join(', ') || 'N/A'}`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error translating command: ${error instanceof Error ? error.message : 'Unknown error'}`
            }]
          };
        }
      }
    );

    // Tool: Execute Minecraft command
    this.server.registerTool(
      "execute_minecraft_command",
      {
        title: "Execute Minecraft Command",
        description: "Execute a command on the Minecraft server via RCON",
        inputSchema: {
          command: z.string().describe("The Minecraft command to execute (without leading slash)"),
          serverHost: z.string().optional().describe("Minecraft server host (default: localhost)"),
          rconPort: z.number().optional().describe("RCON port (default: 25575)"),
          rconPassword: z.string().optional().describe("RCON password")
        }
      },
      async ({ command, serverHost = "localhost", rconPort = 25575, rconPassword = "" }) => {
        try {
          const result = await this.commandExecutor.executeCommand(
            command,
            { host: serverHost, port: rconPort, password: rconPassword }
          );
          return {
            content: [{
              type: "text",
              text: `**Command Executed:** \`/${command}\`\n**Result:** ${result || 'Command executed successfully'}`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text", 
              text: `Error executing command: ${error instanceof Error ? error.message : 'Unknown error'}`
            }]
          };
        }
      }
    );

    // Tool: Get Minecraft server status
    this.server.registerTool(
      "get_server_status", 
      {
        title: "Get Server Status",
        description: "Get Minecraft server status and player information",
        inputSchema: {
          serverHost: z.string().optional().describe("Minecraft server host (default: localhost)"),
          serverPort: z.number().optional().describe("Minecraft server port (default: 25565)")
        }
      },
      async ({ serverHost = "localhost", serverPort = 25565 }) => {
        try {
          const status = await this.commandExecutor.getServerStatus(serverHost, serverPort);
          return {
            content: [{
              type: "text",
              text: `**Server Status:**\n- **Online:** ${status.online ? 'Yes' : 'No'}\n- **Players:** ${status.players?.online || 0}/${status.players?.max || 0}\n- **Version:** ${status.version?.name || 'Unknown'}\n- **Description:** ${status.description?.text || 'N/A'}`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error getting server status: ${error instanceof Error ? error.message : 'Unknown error'}`
            }]
          };
        }
      }
    );

    // Tool: Execute Hebrew command directly (combines translate + execute)
    this.server.registerTool(
      "execute_hebrew_command",
      {
        title: "Execute Hebrew Command", 
        description: "Translate and execute a Hebrew command on the Minecraft server",
        inputSchema: {
          hebrewCommand: z.string().describe("The Hebrew command to translate and execute"),
          serverHost: z.string().optional().describe("Minecraft server host (default: localhost)"),
          rconPort: z.number().optional().describe("RCON port (default: 25575)"),
          rconPassword: z.string().optional().describe("RCON password")
        }
      },
      async ({ hebrewCommand, serverHost = "localhost", rconPort = 25575, rconPassword = "" }) => {
        try {
          // First translate
          const translated = await this.translator.translate(hebrewCommand);
          
          // Then execute
          const result = await this.commandExecutor.executeCommand(
            translated.command,
            { host: serverHost, port: rconPort, password: rconPassword }
          );

          return {
            content: [{
              type: "text",
              text: `**Hebrew Command:** ${hebrewCommand}\n**Translated Command:** \`/${translated.command}\`\n**Execution Result:** ${result || 'Command executed successfully'}\n**Description:** ${translated.description || 'N/A'}`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error processing Hebrew command: ${error instanceof Error ? error.message : 'Unknown error'}`
            }]
          };
        }
      }
    );
  }

  private setupResources() {
    // Resource: Minecraft item categories
    this.server.registerResource(
      "categories",
      "minecraft://items/categories",
      {
        title: "Minecraft Item Categories",
        description: "Available Minecraft item categories and their items",
        mimeType: "application/json"
      },
      async (uri) => {
        const categories = await this.translator.getItemCategories();
        return {
          contents: [{
            uri: uri.href,
            text: JSON.stringify(categories, null, 2)
          }]
        };
      }
    );

    // Resource: Command examples
    this.server.registerResource(
      "examples",
      "minecraft://commands/examples", 
      {
        title: "Hebrew Command Examples",
        description: "Examples of Hebrew commands and their Minecraft translations",
        mimeType: "text/markdown"
      },
      async (uri) => {
        const examples = await this.translator.getExamples();
        return {
          contents: [{
            uri: uri.href,
            text: examples
          }]
        };
      }
    );
  }

  public async start() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Minecraft MCP Server running on stdio");
  }
}

// Start the server
const server = new MinecraftMCPServer();
server.start().catch(console.error);