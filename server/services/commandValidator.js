const minecraftCommands = {
  fill: {
    syntax: '/fill <from> <to> <block> [oldBlockHandling] [filter]',
    validBlocks: [
      'stone', 'cobblestone', 'oak_planks', 'stone_bricks', 'bricks',
      'glass', 'sand', 'gravel', 'dirt', 'grass_block',
      'iron_block', 'gold_block', 'diamond_block',
      'white_wool', 'red_wool', 'blue_wool', 'green_wool',
      'stone_slab', 'stone_stairs', 'air'
    ],
    validHandling: ['replace', 'destroy', 'keep', 'hollow', 'outline']
  },
  
  setblock: {
    syntax: '/setblock <pos> <block> [mode]',
    validModes: ['replace', 'destroy', 'keep']
  },
  
  clone: {
    syntax: '/clone <begin> <end> <destination> [maskMode] [cloneMode]'
  },
  
  give: {
    syntax: '/give <player> <item> [amount]',
    validItems: [
      // Tools
      'diamond_pickaxe', 'iron_pickaxe', 'golden_pickaxe', 'stone_pickaxe', 'wooden_pickaxe', 'netherite_pickaxe',
      'diamond_axe', 'iron_axe', 'golden_axe', 'stone_axe', 'wooden_axe', 'netherite_axe',
      'diamond_shovel', 'iron_shovel', 'golden_shovel', 'stone_shovel', 'wooden_shovel', 'netherite_shovel',
      'diamond_hoe', 'iron_hoe', 'golden_hoe', 'stone_hoe', 'wooden_hoe', 'netherite_hoe',
      'shears', 'fishing_rod', 'compass', 'clock', 'spyglass', 'flint_and_steel',
      
      // Weapons
      'diamond_sword', 'iron_sword', 'golden_sword', 'stone_sword', 'wooden_sword', 'netherite_sword',
      'bow', 'crossbow', 'arrow', 'trident', 'mace', 'shield',
      
      // Armor
      'diamond_helmet', 'diamond_chestplate', 'diamond_leggings', 'diamond_boots',
      'iron_helmet', 'iron_chestplate', 'iron_leggings', 'iron_boots',
      'golden_helmet', 'golden_chestplate', 'golden_leggings', 'golden_boots',
      'leather_helmet', 'leather_chestplate', 'leather_leggings', 'leather_boots',
      'netherite_helmet', 'netherite_chestplate', 'netherite_leggings', 'netherite_boots',
      'chainmail_helmet', 'chainmail_chestplate', 'chainmail_leggings', 'chainmail_boots',
      
      // Food
      'apple', 'golden_apple', 'bread', 'cookie', 'cake', 'cooked_beef', 'beef',
      'cooked_chicken', 'chicken', 'cooked_porkchop', 'porkchop', 'cooked_mutton', 'mutton',
      'cooked_rabbit', 'rabbit', 'cooked_cod', 'cod', 'cooked_salmon', 'salmon',
      'baked_potato', 'potato', 'carrot', 'beetroot', 'melon_slice', 'pumpkin',
      'mushroom_stew', 'wheat', 'sugar', 'egg', 'milk_bucket', 'cocoa_beans',
      
      // Materials & Resources
      'diamond', 'gold_ingot', 'iron_ingot', 'copper_ingot', 'netherite_ingot',
      'raw_gold', 'raw_iron', 'raw_copper', 'coal', 'stick', 'string', 'leather',
      'feather', 'redstone', 'lapis_lazuli', 'emerald', 'quartz', 'nether_quartz',
      'ender_pearl', 'ender_eye', 'nether_star', 'netherite_scrap', 'blaze_rod',
      'blaze_powder', 'ghast_tear', 'soul_sand',
      
      // Blocks
      'stone', 'oak_log', 'oak_planks', 'glass', 'sand', 'gravel', 'dirt',
      'grass_block', 'bricks', 'brick', 'smooth_stone', 'cobblestone',
      'white_wool', 'red_wool', 'blue_wool', 'green_wool', 'black_wool', 'yellow_wool', 'pink_wool',
      'ice', 'blue_ice', 'snow_block', 'sponge', 'obsidian',
      
      // Containers & Crafting
      'chest', 'barrel', 'hopper', 'furnace', 'crafting_table', 'anvil',
      'enchanting_table', 'brewing_stand',
      
      // Buckets & Liquids
      'bucket', 'water_bucket', 'lava_bucket', 'milk_bucket', 'cod_bucket',
      
      // Transportation
      'oak_boat', 'minecart', 'saddle', 'lead', 'horse_spawn_egg',
      
      // Books & Education
      'book', 'writable_book', 'written_book', 'paper', 'map', 'sugar_cane',
      
      // Music & Sound
      'music_disc_13', 'music_disc_cat', 'music_disc_blocks', 'music_disc_chirp',
      'music_disc_far', 'music_disc_mall', 'music_disc_mellohi', 'music_disc_stal',
      'music_disc_strd', 'music_disc_ward', 'music_disc_wait', 'goat_horn', 'bell',
      
      // Potions & Brewing
      'potion', 'glass_bottle',
      
      // Redstone & Technical
      'redstone', 'oak_button', 'oak_door', 'oak_fence_gate', 'oak_fence',
      'lever', 'oak_pressure_plate', 'piston', 'sticky_piston', 'redstone_lamp',
      'repeater', 'comparator',
      
      // Decoration & Miscellaneous
      'painting', 'item_frame', 'oak_sign', 'white_banner', 'flower_pot',
      'poppy', 'dandelion', 'red_mushroom', 'white_carpet',
      
      // Seeds & Farming
      'wheat_seeds', 'pumpkin_seeds', 'melon_seeds', 'beetroot_seeds',
      'bone', 'bone_meal', 'torch',
      
      // Spawn Eggs
      'zombie_spawn_egg', 'skeleton_spawn_egg', 'spider_spawn_egg', 'creeper_spawn_egg',
      'cow_spawn_egg', 'pig_spawn_egg', 'sheep_spawn_egg', 'chicken_spawn_egg',
      'wolf_spawn_egg', 'cat_spawn_egg', 'horse_spawn_egg', 'enderman_spawn_egg',
      'ender_dragon_spawn_egg'
    ]
  },
  
  tp: {
    syntax: '/tp <player> [<x> <y> <z>]',
    aliases: ['teleport']
  },
  
  gamemode: {
    syntax: '/gamemode <mode> [player]',
    validModes: ['survival', 'creative', 'adventure', 'spectator']
  },
  
  time: {
    syntax: '/time set <time>',
    validTimes: ['day', 'night', 'noon', 'midnight', 'dawn', 'dusk']
  },
  
  weather: {
    syntax: '/weather <type> [duration]',
    validTypes: ['clear', 'rain', 'thunder']
  },
  
  difficulty: {
    syntax: '/difficulty <level>',
    validLevels: ['peaceful', 'easy', 'normal', 'hard']
  },
  
  effect: {
    syntax: '/effect give <player> <effect> [duration] [amplifier]',
    validEffects: [
      'strength', 'speed', 'jump_boost', 'regeneration', 'resistance',
      'fire_resistance', 'water_breathing', 'night_vision', 'health_boost',
      'hunger', 'weakness', 'poison', 'nausea'
    ]
  },
  
  summon: {
    syntax: '/summon <entity> [x] [y] [z]',
    validEntities: [
      'zombie', 'skeleton', 'spider', 'creeper', 'cow', 'pig', 'sheep',
      'chicken', 'horse', 'wolf', 'cat', 'ender_dragon', 'wither'
    ]
  },
  
  kill: {
    syntax: '/kill <target>'
  },
  
  enchant: {
    syntax: '/enchant <player> <enchantment> [level]'
  }
};

function validateCommand(command) {
  if (!command || typeof command !== 'string') {
    return { isValid: false, error: 'פקודה לא תקינה' };
  }

  const parts = command.trim().split(/\s+/);
  const commandName = parts[0];

  if (!commandName.startsWith('/')) {
    return { isValid: false, error: 'פקודה חייבת להתחיל ב-/' };
  }

  const baseCommand = commandName.substring(1);

  switch (baseCommand) {
    case 'fill':
      return validateFillCommand(parts);
    case 'setblock':
      return validateSetblockCommand(parts);
    case 'clone':
      return validateCloneCommand(parts);
    case 'give':
      return validateGiveCommand(parts);
    case 'tp':
    case 'teleport':
      return validateTeleportCommand(parts);
    case 'gamemode':
      return validateGamemodeCommand(parts);
    case 'time':
      return validateTimeCommand(parts);
    case 'weather':
      return validateWeatherCommand(parts);
    case 'difficulty':
      return validateDifficultyCommand(parts);
    case 'effect':
      return validateEffectCommand(parts);
    case 'summon':
      return validateSummonCommand(parts);
    case 'kill':
      return validateKillCommand(parts);
    case 'enchant':
      return validateEnchantCommand(parts);
    default:
      return { isValid: true, warning: 'פקודה לא מוכרת, אך התחביר נראה תקין' };
  }
}

function validateFillCommand(parts) {
  if (parts.length < 8) {
    return { isValid: false, error: 'פקודת fill דורשת לפחות 8 פרמטרים' };
  }

  const block = parts[7];
  if (!minecraftCommands.fill.validBlocks.includes(block)) {
    return { 
      isValid: true, 
      warning: `הבלוק '${block}' אולי לא קיים במיינקראפט` 
    };
  }

  if (parts.length > 8) {
    const handling = parts[8];
    if (!minecraftCommands.fill.validHandling.includes(handling)) {
      return { 
        isValid: false, 
        error: `אופן הטיפול '${handling}' לא תקין` 
      };
    }
  }

  return { isValid: true };
}

function validateSetblockCommand(parts) {
  if (parts.length < 5) {
    return { isValid: false, error: 'פקודת setblock דורשת לפחות 5 פרמטרים' };
  }

  const block = parts[4];
  if (!minecraftCommands.fill.validBlocks.includes(block)) {
    return { 
      isValid: true, 
      warning: `הבלוק '${block}' אולי לא קיים במיינקראפט` 
    };
  }

  return { isValid: true };
}

function validateCloneCommand(parts) {
  if (parts.length < 10) {
    return { isValid: false, error: 'פקודת clone דורשת לפחות 10 פרמטרים' };
  }

  return { isValid: true };
}

function validateGiveCommand(parts) {
  if (parts.length < 3) {
    return { isValid: false, error: 'פקודת give דורשת לפחות 3 פרמטרים' };
  }

  const item = parts[2];
  if (!minecraftCommands.give.validItems.includes(item)) {
    return { 
      isValid: true, 
      warning: `הפריט '${item}' אולי לא קיים במיינקראפט` 
    };
  }

  return { isValid: true };
}

function validateTeleportCommand(parts) {
  if (parts.length < 2) {
    return { isValid: false, error: 'פקודת tp דורשת לפחות 2 פרמטרים' };
  }

  return { isValid: true };
}

function validateGamemodeCommand(parts) {
  if (parts.length < 2) {
    return { isValid: false, error: 'פקודת gamemode דורשת לפחות 2 פרמטרים' };
  }

  const mode = parts[1];
  if (!minecraftCommands.gamemode.validModes.includes(mode)) {
    return { 
      isValid: false, 
      error: `מצב משחק '${mode}' לא תקין` 
    };
  }

  return { isValid: true };
}

function validateTimeCommand(parts) {
  if (parts.length < 3) {
    return { isValid: false, error: 'פקודת time דורשת לפחות 3 פרמטרים' };
  }

  return { isValid: true };
}

function validateWeatherCommand(parts) {
  if (parts.length < 2) {
    return { isValid: false, error: 'פקודת weather דורשת לפחות 2 פרמטרים' };
  }

  const weatherType = parts[1];
  if (!minecraftCommands.weather.validTypes.includes(weatherType)) {
    return { 
      isValid: false, 
      error: `סוג מזג אוויר '${weatherType}' לא תקין` 
    };
  }

  return { isValid: true };
}

function validateDifficultyCommand(parts) {
  if (parts.length < 2) {
    return { isValid: false, error: 'פקודת difficulty דורשת לפחות 2 פרמטרים' };
  }

  const level = parts[1];
  if (!minecraftCommands.difficulty.validLevels.includes(level)) {
    return { 
      isValid: false, 
      error: `רמת קושי '${level}' לא תקינה` 
    };
  }

  return { isValid: true };
}

function validateEffectCommand(parts) {
  if (parts.length < 4) {
    return { isValid: false, error: 'פקודת effect דורשת לפחות 4 פרמטרים' };
  }

  const effect = parts[3];
  if (!minecraftCommands.effect.validEffects.includes(effect)) {
    return { 
      isValid: true, 
      warning: `האפקט '${effect}' אולי לא קיים במיינקראפט` 
    };
  }

  return { isValid: true };
}

function validateSummonCommand(parts) {
  if (parts.length < 2) {
    return { isValid: false, error: 'פקודת summon דורשת לפחות 2 פרמטרים' };
  }

  const entity = parts[1];
  if (!minecraftCommands.summon.validEntities.includes(entity)) {
    return { 
      isValid: true, 
      warning: `היצור '${entity}' אולי לא קיים במיינקראפט` 
    };
  }

  return { isValid: true };
}

function validateKillCommand(parts) {
  if (parts.length < 2) {
    return { isValid: false, error: 'פקודת kill דורשת לפחות 2 פרמטרים' };
  }

  return { isValid: true };
}

function validateEnchantCommand(parts) {
  if (parts.length < 3) {
    return { isValid: false, error: 'פקודת enchant דורשת לפחות 3 פרמטרים' };
  }

  return { isValid: true };
}

function validateCoordinates(coord) {
  if (coord === '~' || coord.startsWith('~')) {
    return true;
  }
  
  return !isNaN(parseInt(coord));
}

module.exports = {
  validateCommand,
  minecraftCommands
};