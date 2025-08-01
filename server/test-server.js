const express = require('express');
const { processHebrewCommand } = require('./services/hebrewProcessor');
const { generateMinecraftCommand } = require('./services/commandGenerator');

const app = express();
app.use(express.json());

app.post('/test', async (req, res) => {
  try {
    const processed = processHebrewCommand('בנה קיר');
    const command = await generateMinecraftCommand(processed);
    res.json({ processed, command });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5001, () => {
  console.log('Test server running on port 5001');
});