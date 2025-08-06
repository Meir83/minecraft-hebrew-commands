# Minecraft MCP Server

An MCP (Model Context Protocol) server that provides tools for executing Minecraft commands with Hebrew language support.

## Features

- **Hebrew Command Translation**: Convert Hebrew commands to Minecraft syntax
- **Command Execution**: Execute commands on Minecraft server via RCON
- **Server Status**: Get real-time server and player information  
- **Resource Access**: Browse Minecraft items and command examples

## Tools Available

### `translate_hebrew_command`
Translate Hebrew commands to Minecraft command syntax.
```
Input: hebrewCommand (string)
Output: Minecraft command, description, and materials
```

### `execute_minecraft_command`  
Execute commands on Minecraft server via RCON.
```
Input: command, serverHost?, rconPort?, rconPassword?
Output: Command execution result
```

### `get_server_status`
Get Minecraft server status and player information.
```
Input: serverHost?, serverPort? 
Output: Server status, player count, version info
```

### `execute_hebrew_command`
Translate and execute Hebrew commands in one step.
```
Input: hebrewCommand, serverHost?, rconPort?, rconPassword?
Output: Translation and execution results
```

## Resources Available

### `minecraft://items/categories`
JSON data of all available Minecraft item categories and items with Hebrew translations.

### `minecraft://commands/examples`  
Markdown documentation with Hebrew command examples and their Minecraft translations.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the server:
```bash  
npm run build
```

3. Configure in your MCP client (e.g., Claude Desktop):
```json
{
  "mcpServers": {
    "minecraft": {
      "command": "node",
      "args": ["C:/Users/asda/.cursor/minecraft/mcp-server/dist/index.js"],
      "env": {}
    }
  }
}
```

## Requirements

- Node.js 18+ with ES modules support
- Running Minecraft Hebrew Commands service (port 3001)
- Minecraft server with RCON enabled (for command execution)

## RCON Configuration

To execute commands, your Minecraft server must have RCON enabled in `server.properties`:
```
enable-rcon=true
rcon.port=25575
rcon.password=your_password_here
```

## Usage Examples

```typescript
// Translate Hebrew command
await client.callTool("translate_hebrew_command", {
  hebrewCommand: "תן לי חרב יהלום"
});

// Execute command via RCON  
await client.callTool("execute_minecraft_command", {
  command: "give @p diamond_sword 1",
  rconPassword: "your_password"
});

// Get server status
await client.callTool("get_server_status", {});

// Translate and execute in one step
await client.callTool("execute_hebrew_command", {
  hebrewCommand: "בנה קיר",
  rconPassword: "your_password" 
});
```