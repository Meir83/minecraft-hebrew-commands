#!/usr/bin/env node

/**
 * Simple test script to verify the MCP server can start
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Testing Minecraft MCP Server startup...\n');

const serverPath = join(__dirname, 'dist', 'index.js');
const server = spawn('node', [serverPath], {
  stdio: ['pipe', 'pipe', 'pipe']
});

let startupMessage = false;

server.stdout.on('data', (data) => {
  console.log(`STDOUT: ${data}`);
});

server.stderr.on('data', (data) => {
  const message = data.toString();
  console.log(`STDERR: ${message}`);
  
  if (message.includes('Minecraft MCP Server running')) {
    startupMessage = true;
    console.log('✅ Server started successfully!');
    
    // Send a simple test message to see if server responds
    setTimeout(() => {
      console.log('\n🔄 Sending test message...');
      server.stdin.write(JSON.stringify({
        jsonrpc: "2.0",
        method: "tools/list",
        id: 1
      }) + '\n');
    }, 1000);
    
    // Close after test
    setTimeout(() => {
      console.log('\n🔚 Shutting down test server...');
      server.kill();
    }, 3000);
  }
});

server.on('close', (code) => {
  console.log(`\n📊 Test Results:`);
  console.log(`   - Process exit code: ${code}`);
  console.log(`   - Startup message seen: ${startupMessage ? '✅ Yes' : '❌ No'}`);
  console.log(`   - Overall status: ${startupMessage && code === 0 ? '✅ PASS' : '❌ FAIL'}`);
});

server.on('error', (err) => {
  console.error(`❌ Server error: ${err.message}`);
});