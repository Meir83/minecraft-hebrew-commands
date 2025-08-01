const express = require('express');
const router = express.Router();
const { processHebrewCommand } = require('../services/hebrewProcessor');
const { generateMinecraftCommand } = require('../services/commandGenerator');
const { validateCommand } = require('../services/commandValidator');

router.post('/generate-command', async (req, res) => {
  try {
    const { hebrewInput } = req.body;

    if (!hebrewInput || typeof hebrewInput !== 'string') {
      return res.status(400).json({ error: 'נדרש קלט בעברית' });
    }

    const processedCommand = processHebrewCommand(hebrewInput.trim());
    
    if (!processedCommand.action) {
      return res.status(400).json({ 
        error: 'לא הצלחתי להבין את הפקודה. נסה פקודה אחרת כמו "בנה קיר" או "מלא באבן"' 
      });
    }

    const minecraftCommand = await generateMinecraftCommand(processedCommand);
    
    const validation = validateCommand(minecraftCommand.command);
    if (!validation.isValid) {
      return res.status(500).json({ 
        error: 'נוצרה פקודה לא תקינה. נסה שוב עם פקודה אחרת' 
      });
    }

    res.json({
      command: minecraftCommand.command,
      materials: minecraftCommand.materials || [],
      description: minecraftCommand.description || '',
      originalInput: hebrewInput,
      processedAction: processedCommand
    });

  } catch (error) {
    console.error('Error processing Hebrew command:', error);
    res.status(500).json({ error: 'שגיאה בעיבוד הפקודה' });
  }
});

router.get('/examples', (req, res) => {
  res.json([
    // Building commands
    { hebrew: 'בנה קיר', english: 'build wall', category: 'בנייה' },
    { hebrew: 'צור בית', english: 'create house', category: 'בנייה' },
    { hebrew: 'מלא באבן', english: 'fill with stone', category: 'בנייה' },
    { hebrew: 'בנה מגדל', english: 'build tower', category: 'בנייה' },
    { hebrew: 'צור רצפה', english: 'create floor', category: 'בנייה' },
    { hebrew: 'בנה גשר', english: 'build bridge', category: 'בנייה' },
    
    // Player commands - Tools & Weapons
    { hebrew: 'תן לי חרב יהלום', english: 'give me diamond sword', category: 'שחקן' },
    { hebrew: 'תן לי מגרפה', english: 'give me pickaxe', category: 'שחקן' },
    { hebrew: 'תן לי גרזן ברזל', english: 'give me iron axe', category: 'שחקן' },
    { hebrew: 'תן לי קשת צולבת', english: 'give me crossbow', category: 'שחקן' },
    { hebrew: 'תן לי שריון יהלום', english: 'give me diamond chestplate', category: 'שחקן' },
    
    // Player commands - Items & Materials
    { hebrew: 'תן לי 10 יהלומים', english: 'give me 10 diamonds', category: 'שחקן' },
    { hebrew: 'תן לי לחם', english: 'give me bread', category: 'שחקן' },
    { hebrew: 'תן לי תפוח זהב', english: 'give me golden apple', category: 'שחקן' },
    { hebrew: 'תן לי 100 ברזל', english: 'give me 100 iron', category: 'שחקן' },
    { hebrew: 'תן לי דלי מים', english: 'give me water bucket', category: 'שחקן' },
    { hebrew: 'תן לי תקליט', english: 'give me music disc', category: 'שחקן' },
    
    // Player commands - Status & Effects
    { hebrew: 'העבר אותי', english: 'teleport me', category: 'שחקן' },
    { hebrew: 'שנה ליצירתי', english: 'change to creative', category: 'שחקן' },
    { hebrew: 'הוסף כוח', english: 'add strength', category: 'שחקן' },
    { hebrew: 'הוסף מהירות', english: 'add speed', category: 'שחקן' },
    { hebrew: 'כשוף חרב', english: 'enchant sword', category: 'שחקן' },
    { hebrew: 'הוסף ראיית לילה', english: 'add night vision', category: 'שחקן' },
    
    // World commands
    { hebrew: 'שנה ליום', english: 'change to day', category: 'עולם' },
    { hebrew: 'שנה ללילה', english: 'change to night', category: 'עולם' },
    { hebrew: 'גשם', english: 'rain', category: 'עולם' },
    { hebrew: 'שמש', english: 'clear weather', category: 'עולם' },
    { hebrew: 'רעם', english: 'thunder', category: 'עולם' },
    { hebrew: 'שנה לקל', english: 'change to easy', category: 'עולם' },
    
    // Entity commands
    { hebrew: 'זמן זומבי', english: 'summon zombie', category: 'יצורים' },
    { hebrew: 'זמן 5 פרות', english: 'summon 5 cows', category: 'יצורים' },
    { hebrew: 'זמן קריפר', english: 'summon creeper', category: 'יצורים' },
    { hebrew: 'הרג זומבים', english: 'kill zombies', category: 'יצורים' },
    { hebrew: 'זמן דרקון', english: 'summon dragon', category: 'יצורים' },
    { hebrew: 'זמן סוס', english: 'summon horse', category: 'יצורים' },
    { hebrew: 'זמן 10 כבשים', english: 'summon 10 sheep', category: 'יצורים' },
    { hebrew: 'זמן אנדרמן', english: 'summon enderman', category: 'יצורים' }
  ]);
});

module.exports = router;