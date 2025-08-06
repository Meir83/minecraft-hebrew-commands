import * as minecraft from 'minecraft-protocol';

interface RCONConfig {
  host: string;
  port: number;
  password: string;
}

interface ServerStatus {
  online: boolean;
  players?: {
    online: number;
    max: number;
    sample?: Array<{ name: string; id: string }>;
  };
  version?: {
    name: string;
    protocol: number;
  };
  description?: {
    text: string;
  };
  latency?: number;
}

/**
 * Handles Minecraft command execution via RCON and server status queries
 */
export class MinecraftCommandExecutor {
  
  /**
   * Execute a command on the Minecraft server via RCON
   */
  async executeCommand(command: string, config: RCONConfig): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!config.password) {
        reject(new Error("RCON password is required"));
        return;
      }

      const client = minecraft.createClient({
        host: config.host,
        port: config.port,
        username: 'rcon',
        password: config.password,
        version: false, // Use RCON protocol
      } as any);

      let timeout = setTimeout(() => {
        client.end();
        reject(new Error("Connection timeout"));
      }, 10000);

      client.on('connect', () => {
        clearTimeout(timeout);
        
        // Send RCON command
        client.write('rcon', {
          command: command
        });
      });

      client.on('rcon', (packet: any) => {
        client.end();
        resolve(packet.response || "Command executed successfully");
      });

      client.on('error', (error: Error) => {
        clearTimeout(timeout);
        reject(new Error(`RCON connection failed: ${error.message}`));
      });

      client.on('end', () => {
        clearTimeout(timeout);
      });
    });
  }

  /**
   * Get Minecraft server status
   */
  async getServerStatus(host: string, port: number): Promise<ServerStatus> {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      
      minecraft.ping({
        host: host,
        port: port,
      }, (error: Error | null, result: any) => {
        if (error) {
          resolve({
            online: false
          });
          return;
        }

        const latency = Date.now() - startTime;
        
        resolve({
          online: true,
          players: result.players ? {
            online: result.players.online || 0,
            max: result.players.max || 0,
            sample: result.players.sample || []
          } : undefined,
          version: result.version ? {
            name: result.version.name || 'Unknown',
            protocol: result.version.protocol || 0
          } : undefined,
          description: result.description ? {
            text: typeof result.description === 'string' 
              ? result.description 
              : result.description.text || 'No description'
          } : undefined,
          latency
        });
      });
    });
  }

  /**
   * Test RCON connection
   */
  async testRCONConnection(config: RCONConfig): Promise<boolean> {
    try {
      await this.executeCommand('list', config);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get online players via RCON
   */
  async getOnlinePlayers(config: RCONConfig): Promise<string[]> {
    try {
      const result = await this.executeCommand('list', config);
      // Parse the result to extract player names
      // Format is typically: "There are 2/20 players online: Player1, Player2"
      const match = result.match(/players online: (.+)$/);
      if (match && match[1] && match[1].trim() !== '') {
        return match[1].split(', ').map(name => name.trim());
      }
      return [];
    } catch (error) {
      throw new Error(`Failed to get online players: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Execute multiple commands in sequence
   */
  async executeCommands(commands: string[], config: RCONConfig): Promise<string[]> {
    const results: string[] = [];
    
    for (const command of commands) {
      try {
        const result = await this.executeCommand(command, config);
        results.push(result);
        // Small delay between commands to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        results.push(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }
    
    return results;
  }
}