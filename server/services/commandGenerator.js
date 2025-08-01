const commandTemplates = {
  // Player commands
  give: (params) => {
    const { item, amount, player } = params;
    const targetPlayer = player || '@p';
    const itemAmount = amount || 1;
    return {
      command: `/give ${targetPlayer} ${item} ${itemAmount}`,
      materials: [item],
      description: `נותן ${itemAmount} ${item} לשחקן ${targetPlayer}`
    };
  },
  
  teleport: (params) => {
    const { player, coordinates } = params;
    const targetPlayer = player || '@p';
    const coords = coordinates || '~ ~10 ~';
    return {
      command: `/tp ${targetPlayer} ${coords}`,
      materials: [],
      description: `מעביר את השחקן ${targetPlayer} למיקום ${coords}`
    };
  },
  
  gamemode: (params) => {
    const { gamemode, player } = params;
    const targetPlayer = player || '@p';
    return {
      command: `/gamemode ${gamemode} ${targetPlayer}`,
      materials: [],
      description: `משנה את מצב המשחק של ${targetPlayer} ל-${gamemode}`
    };
  },
  
  effect: (params) => {
    const { effect, duration, amplifier, player } = params;
    const targetPlayer = player || '@p';
    const effectDuration = duration || 60;
    const effectAmplifier = amplifier || 1;
    return {
      command: `/effect give ${targetPlayer} ${effect} ${effectDuration} ${effectAmplifier}`,
      materials: [],
      description: `נותן אפקט ${effect} לשחקן ${targetPlayer} למשך ${effectDuration} שניות`
    };
  },
  
  enchant: (params) => {
    const { enchantment, level, player } = params;
    const targetPlayer = player || '@p';
    const enchantLevel = level || 1;
    return {
      command: `/enchant ${targetPlayer} ${enchantment} ${enchantLevel}`,
      materials: [],
      description: `מקסים את הפריט של ${targetPlayer} ברמה ${enchantLevel}`
    };
  },
  
  // World commands
  time: (params) => {
    const { timeOfDay } = params;
    const timeMap = {
      'day': '1000',
      'noon': '6000', 
      'night': '13000',
      'midnight': '18000',
      'dawn': '23000',
      'dusk': '12000'
    };
    const timeValue = timeMap[timeOfDay] || timeOfDay || '1000';
    return {
      command: `/time set ${timeValue}`,
      materials: [],
      description: `משנה את השעה ל-${timeOfDay || timeValue}`
    };
  },
  
  weather: (params) => {
    const { weather } = params;
    const weatherType = weather || 'clear';
    return {
      command: `/weather ${weatherType}`,
      materials: [],
      description: `משנה את מזג האוויר ל-${weatherType}`
    };
  },
  
  difficulty: (params) => {
    const { difficulty } = params;
    const difficultyLevel = difficulty || 'normal';
    return {
      command: `/difficulty ${difficultyLevel}`,
      materials: [],
      description: `משנה את רמת הקושי ל-${difficultyLevel}`
    };
  },
  
  // Entity commands
  summon: (params) => {
    const { entity, coordinates, amount } = params;
    const coords = coordinates || '~ ~ ~';
    const entityAmount = amount || 1;
    
    if (entityAmount === 1) {
      return {
        command: `/summon ${entity} ${coords}`,
        materials: [],
        description: `מזמן ${entity} במיקום ${coords}`
      };
    } else {
      // For multiple entities, we need multiple commands
      let commands = [];
      for (let i = 0; i < entityAmount; i++) {
        commands.push(`/summon ${entity} ${coords}`);
      }
      return {
        command: commands.join('; '),
        materials: [],
        description: `מזמן ${entityAmount} ${entity} במיקום ${coords}`
      };
    }
  },
  
  kill: (params) => {
    const { entity, player } = params;
    const target = entity ? `@e[type=${entity}]` : (player || '@e');
    return {
      command: `/kill ${target}`,
      materials: [],
      description: `הורג את ${target}`
    };
  },
  
  // Building commands (existing)
  build: {
    wall: (params) => {
      const { material, dimensions } = params;
      const width = dimensions.width || 10;
      const height = dimensions.height || 5;
      return {
        command: `/fill ~ ~ ~ ~${width} ~${height} ~ ${material}`,
        materials: [material],
        description: `בונה קיר ברוחב ${width} ובגובה ${height} בלוקים מחומר ${material}`
      };
    },
    
    house: (params) => {
      const { material, dimensions } = params;
      const width = dimensions.width || 8;
      const height = dimensions.height || 4;
      const length = dimensions.length || 8;
      
      return {
        command: `/fill ~ ~ ~ ~${width} ~${height} ~${length} ${material} hollow`,
        materials: [material, 'oak_door', 'glass_pane'],
        description: `בונה בית ברוחב ${width}, אורך ${length} וגובה ${height} בלוקים`
      };
    },
    
    tower: (params) => {
      const { material, dimensions } = params;
      const width = dimensions.width || 5;
      const height = dimensions.height || 15;
      
      return {
        command: `/fill ~ ~ ~ ~${width} ~${height} ~${width} ${material} hollow`,
        materials: [material, 'ladder'],
        description: `בונה מגדל בגודל ${width}x${width} ובגובה ${height} בלוקים`
      };
    },
    
    bridge: (params) => {
      const { material, dimensions } = params;
      const length = dimensions.length || 15;
      const width = dimensions.width || 3;
      
      return {
        command: `/fill ~ ~ ~ ~${length} ~ ~${width} ${material}`,
        materials: [material, 'oak_fence'],
        description: `בונה גשר באורך ${length} וברוחב ${width} בלוקים`
      };
    },
    
    floor: (params) => {
      const { material, dimensions } = params;
      const width = dimensions.width || 10;
      const length = dimensions.length || 10;
      
      return {
        command: `/fill ~ ~ ~ ~${width} ~ ~${length} ${material}`,
        materials: [material],
        description: `יוצר רצפה ברוחב ${width} ובאורך ${length} בלוקים`
      };
    },
    
    ceiling: (params) => {
      const { material, dimensions } = params;
      const width = dimensions.width || 10;
      const length = dimensions.length || 10;
      const height = dimensions.height || 4;
      
      return {
        command: `/fill ~ ~${height} ~ ~${width} ~${height} ~${length} ${material}`,
        materials: [material],
        description: `יוצר תקרה בגובה ${height} בלוקים`
      };
    },
    
    room: (params) => {
      const { material, dimensions } = params;
      const width = dimensions.width || 8;
      const height = dimensions.height || 4;
      const length = dimensions.length || 8;
      
      return {
        command: `/fill ~ ~ ~ ~${width} ~${height} ~${length} ${material} hollow`,
        materials: [material, 'torch'],
        description: `יוצר חדר סגור ברוחב ${width}, אורך ${length} וגובה ${height} בלוקים`
      };
    },
    
    box: (params) => {
      const { material, dimensions } = params;
      const size = dimensions.width || 5;
      
      return {
        command: `/fill ~ ~ ~ ~${size} ~${size} ~${size} ${material}`,
        materials: [material],
        description: `יוצר קופסה מלאה בגודל ${size}x${size}x${size}`
      };
    },
    
    structure: (params) => {
      const { material, dimensions } = params;
      const width = dimensions.width || 5;
      const height = dimensions.height || 5;
      const length = dimensions.length || 5;
      
      return {
        command: `/fill ~ ~ ~ ~${width} ~${height} ~${length} ${material}`,
        materials: [material],
        description: `יוצר מבנה מלא בגודל ${width}x${height}x${length}`
      };
    }
  },
  
  create: {
    // Create uses the same templates as build
  },
  
  fill: (params) => {
    const { material, dimensions } = params;
    const width = dimensions.width || 10;
    const height = dimensions.height || 1;
    const length = dimensions.length || 10;
    
    return {
      command: `/fill ~ ~ ~ ~${width} ~${height} ~${length} ${material}`,
      materials: [material],
      description: `ממלא אזור בגודל ${width}x${height}x${length} בחומר ${material}`
    };
  },
  
  replace: (params) => {
    const { material, dimensions } = params;
    const width = dimensions.width || 10;
    const height = dimensions.height || 10;
    const length = dimensions.length || 10;
    
    return {
      command: `/fill ~ ~ ~ ~${width} ~${height} ~${length} ${material} replace`,
      materials: [material],
      description: `מחליף בלוקים קיימים בחומר ${material} באזור ${width}x${height}x${length}`
    };
  },
  
  clear: (params) => {
    const { dimensions } = params;
    const width = dimensions.width || 10;
    const height = dimensions.height || 10;
    const length = dimensions.length || 10;
    
    return {
      command: `/fill ~ ~ ~ ~${width} ~${height} ~${length} air`,
      materials: [],
      description: `מנקה אזור בגודל ${width}x${height}x${length} (מחליף באוויר)`
    };
  },
  
  destroy: (params) => {
    const { dimensions } = params;
    const width = dimensions.width || 5;
    const height = dimensions.height || 5;
    const length = dimensions.length || 5;
    
    return {
      command: `/fill ~ ~ ~ ~${width} ~${height} ~${length} air`,
      materials: [],
      description: `הורס/מוחק אזור בגודל ${width}x${height}x${length}`
    };
  }
};

async function generateMinecraftCommand(processedCommand) {
  const { 
    action, structure, material, dimensions, item, entity, 
    gamemode, weather, timeOfDay, difficulty, effect, 
    amount, player 
  } = processedCommand;
  
  if (!action) {
    throw new Error('פעולה לא זוהתה');
  }

  const params = {
    material: material || 'stone',
    dimensions: dimensions || { width: 5, height: 5, length: 5 },
    item: item || 'diamond_sword',
    entity: entity || 'zombie',
    gamemode: gamemode || 'creative',
    weather: weather || 'clear',
    timeOfDay: timeOfDay || 'day',
    difficulty: difficulty || 'normal',
    effect: effect || 'strength',
    amount: amount || 1,
    player: player || '@p',
    coordinates: '~ ~ ~'
  };

  // Handle different command types
  switch (action) {
    case 'give':
      return commandTemplates.give(params);
      
    case 'teleport':
      return commandTemplates.teleport(params);
      
    case 'change':
      if (gamemode) {
        return commandTemplates.gamemode({...params, gamemode});
      } else if (weather) {
        return commandTemplates.weather({...params, weather});
      } else if (timeOfDay) {
        return commandTemplates.time({...params, timeOfDay});
      } else if (difficulty) {
        return commandTemplates.difficulty({...params, difficulty});
      }
      break;
      
    case 'add':
      if (effect) {
        return commandTemplates.effect({...params, effect});
      }
      break;
      
    case 'summon':
      return commandTemplates.summon({...params, entity});
      
    case 'kill':
      return commandTemplates.kill({...params, entity});
      
    case 'enchant':
      return commandTemplates.enchant(params);
      
    case 'time':
      return commandTemplates.time({...params, timeOfDay});
      
    case 'weather':
      return commandTemplates.weather({...params, weather});
      
    case 'difficulty':
      return commandTemplates.difficulty({...params, difficulty});
      
    case 'effect':
      return commandTemplates.effect({...params, effect});
      
    case 'build':
    case 'create':
      if (!structure || !structure.type) {
        return commandTemplates.fill(params);
      }
      
      const structureType = structure.type;
      if (commandTemplates.build[structureType]) {
        return commandTemplates.build[structureType](params);
      }
      break;
  }

  // Fallback to existing command templates
  if (commandTemplates[action]) {
    return commandTemplates[action](params);
  }

  // Default fallback
  return commandTemplates.fill(params);
}

module.exports = {
  generateMinecraftCommand,
  commandTemplates
};