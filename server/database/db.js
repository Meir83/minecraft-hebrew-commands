const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'minecraft_commands.db');
let db;

async function initializeDatabase() {
  return new Promise((resolve, reject) => {
    db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error('Error opening database:', err);
        reject(err);
        return;
      }
      
      console.log('Connected to SQLite database');
      createTables().then(resolve).catch(reject);
    });
  });
}

async function createTables() {
  return new Promise((resolve, reject) => {
    const createTablesSQL = `
      CREATE TABLE IF NOT EXISTS command_templates (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        hebrew_action TEXT NOT NULL,
        hebrew_structure TEXT,
        english_action TEXT NOT NULL,
        english_structure TEXT,
        command_template TEXT NOT NULL,
        default_material TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS materials (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        hebrew_name TEXT NOT NULL UNIQUE,
        minecraft_id TEXT NOT NULL,
        category TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS user_commands (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        hebrew_input TEXT NOT NULL,
        generated_command TEXT NOT NULL,
        materials_used TEXT,
        success BOOLEAN DEFAULT 1,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE INDEX IF NOT EXISTS idx_hebrew_action ON command_templates(hebrew_action);
      CREATE INDEX IF NOT EXISTS idx_hebrew_name ON materials(hebrew_name);
    `;

    db.exec(createTablesSQL, (err) => {
      if (err) {
        console.error('Error creating tables:', err);
        reject(err);
        return;
      }
      
      console.log('Database tables created successfully');
      populateInitialData().then(resolve).catch(reject);
    });
  });
}

async function populateInitialData() {
  return new Promise((resolve, reject) => {
    const materialData = [
      ['אבן', 'stone', 'building'],
      ['קובלסטון', 'cobblestone', 'building'],
      ['עץ', 'oak_planks', 'building'],
      ['זכוכית', 'glass', 'building'],
      ['חול', 'sand', 'natural'],
      ['חצץ', 'gravel', 'natural'],
      ['אדמה', 'dirt', 'natural'],
      ['דשא', 'grass_block', 'natural'],
      ['לבנים', 'bricks', 'building'],
      ['אבן לבנה', 'stone_bricks', 'building'],
      ['ברזל', 'iron_block', 'metal'],
      ['זהב', 'gold_block', 'metal'],
      ['יהלום', 'diamond_block', 'precious'],
      ['צמר לבן', 'white_wool', 'decorative'],
      ['צמר אדום', 'red_wool', 'decorative'],
      ['צמר כחול', 'blue_wool', 'decorative'],
      ['צמר ירוק', 'green_wool', 'decorative']
    ];

    const templateData = [
      ['בנה', 'קיר', 'build', 'wall', '/fill ~ ~ ~ ~{width} ~{height} ~ {material}', 'stone'],
      ['בנה', 'בית', 'build', 'house', '/fill ~ ~ ~ ~{width} ~{height} ~{length} {material} hollow', 'oak_planks'],
      ['בנה', 'מגדל', 'build', 'tower', '/fill ~ ~ ~ ~{width} ~{height} ~{width} {material} hollow', 'cobblestone'],
      ['צור', 'רצפה', 'create', 'floor', '/fill ~ ~ ~ ~{width} ~ ~{length} {material}', 'stone'],
      ['מלא', null, 'fill', null, '/fill ~ ~ ~ ~{width} ~{height} ~{length} {material}', 'stone'],
      ['נקה', null, 'clear', null, '/fill ~ ~ ~ ~{width} ~{height} ~{length} air', null]
    ];

    db.serialize(() => {
      const insertMaterial = db.prepare('INSERT OR IGNORE INTO materials (hebrew_name, minecraft_id, category) VALUES (?, ?, ?)');
      const insertTemplate = db.prepare('INSERT OR IGNORE INTO command_templates (hebrew_action, hebrew_structure, english_action, english_structure, command_template, default_material) VALUES (?, ?, ?, ?, ?, ?)');

      materialData.forEach(material => {
        insertMaterial.run(material);
      });

      templateData.forEach(template => {
        insertTemplate.run(template);
      });

      insertMaterial.finalize();
      insertTemplate.finalize();

      console.log('Initial data populated successfully');
      resolve();
    });
  });
}

async function logUserCommand(hebrewInput, generatedCommand, materialsUsed, success = true) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO user_commands (hebrew_input, generated_command, materials_used, success) VALUES (?, ?, ?, ?)';
    db.run(sql, [hebrewInput, generatedCommand, JSON.stringify(materialsUsed), success], function(err) {
      if (err) {
        reject(err);
        return;
      }
      resolve(this.lastID);
    });
  });
}

async function getMaterialByHebrew(hebrewName) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM materials WHERE hebrew_name = ?';
    db.get(sql, [hebrewName], (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(row);
    });
  });
}

async function getCommandTemplate(hebrewAction, hebrewStructure = null) {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM command_templates WHERE hebrew_action = ?';
    let params = [hebrewAction];
    
    if (hebrewStructure) {
      sql += ' AND hebrew_structure = ?';
      params.push(hebrewStructure);
    }
    
    db.get(sql, params, (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(row);
    });
  });
}

function closeDatabase() {
  if (db) {
    db.close((err) => {
      if (err) {
        console.error('Error closing database:', err);
      } else {
        console.log('Database connection closed');
      }
    });
  }
}

module.exports = {
  initializeDatabase,
  logUserCommand,
  getMaterialByHebrew,
  getCommandTemplate,
  closeDatabase
};