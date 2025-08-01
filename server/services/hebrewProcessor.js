const hebrewDictionary = {
  actions: {
    // Building commands
    'בנה': 'build',
    'בני': 'build',
    'בנות': 'build',
    'בנייה': 'build',
    'צור': 'create',
    'צורי': 'create',
    'צרי': 'create',
    'יצור': 'create',
    'עשה': 'make',
    'עשי': 'make',
    'הכן': 'prepare',
    'הכני': 'prepare',
    'מלא': 'fill',
    'מלאי': 'fill',
    'מילוי': 'fill',
    'החלף': 'replace',
    'החליפי': 'replace',
    'הרס': 'destroy',
    'הרסי': 'destroy',
    'הריסה': 'destroy',
    'נקה': 'clear',
    'נקי': 'clear',
    'ניקוי': 'clear',
    
    // Player commands
    'תן': 'give',
    'תני': 'give',
    'נתן': 'give',
    'העבר': 'teleport',
    'העברי': 'teleport',
    'טלפורט': 'teleport',
    'שנה': 'change',
    'שני': 'change',
    'החלפה': 'change',
    'הוסף': 'add',
    'הוסיפי': 'add',
    'הסר': 'remove',
    'הסירי': 'remove',
    'הרג': 'kill',
    'הרגי': 'kill',
    'זמן': 'summon',
    'זמני': 'summon',
    'קרא': 'summon',
    'קראי': 'summon',
    
    // World commands
    'שנה זמן': 'time',
    'מזג אויר': 'weather',
    'מזג': 'weather',
    'גשם': 'weather',
    'שמש': 'weather',
    'רעם': 'weather',
    'קושי': 'difficulty',
    'רמת קושי': 'difficulty',
    
    // Effect commands
    'אפקט': 'effect',
    'השפעה': 'effect',
    'כישוף': 'enchant',
    'קסם': 'enchant'
  },
  
  structures: {
    // Building structures
    'קיר': { type: 'wall', defaultMaterial: 'stone' },
    'קירות': { type: 'wall', defaultMaterial: 'stone' },
    'בית': { type: 'house', defaultMaterial: 'oak_planks' },
    'בתים': { type: 'house', defaultMaterial: 'oak_planks' },
    'מגדל': { type: 'tower', defaultMaterial: 'cobblestone' },
    'מגדלים': { type: 'tower', defaultMaterial: 'cobblestone' },
    'גשר': { type: 'bridge', defaultMaterial: 'oak_planks' },
    'גשרים': { type: 'bridge', defaultMaterial: 'oak_planks' },
    'רצפה': { type: 'floor', defaultMaterial: 'stone' },
    'רצפות': { type: 'floor', defaultMaterial: 'stone' },
    'תקרה': { type: 'ceiling', defaultMaterial: 'oak_planks' },
    'תקרות': { type: 'ceiling', defaultMaterial: 'oak_planks' },
    'חדר': { type: 'room', defaultMaterial: 'stone_bricks' },
    'חדרים': { type: 'room', defaultMaterial: 'stone_bricks' },
    'מבנה': { type: 'structure', defaultMaterial: 'stone' },
    'מבנים': { type: 'structure', defaultMaterial: 'stone' },
    'קופסה': { type: 'box', defaultMaterial: 'stone' },
    'קופסאות': { type: 'box', defaultMaterial: 'stone' }
  },
  
  // Minecraft items and entities
  items: {
    // Tools (כלים)
    'מגרפה': 'diamond_pickaxe', 'מגרפות': 'diamond_pickaxe', 'כלי חפירה': 'diamond_pickaxe',
    'גרזן': 'diamond_axe', 'גרזנים': 'diamond_axe', 'גרזן יהלום': 'diamond_axe',
    'את': 'diamond_shovel', 'אתות': 'diamond_shovel', 'את יהלום': 'diamond_shovel',
    'מעדר': 'diamond_hoe', 'מעדרים': 'diamond_hoe',
    'מזמרה': 'shears', 'מזמרות': 'shears',
    'חכה': 'fishing_rod', 'חכות': 'fishing_rod', 'חכת דיג': 'fishing_rod',
    'מצפן': 'compass', 'מצפנים': 'compass',
    'שעון': 'clock', 'שעונים': 'clock',
    'משקפת': 'spyglass', 'משקפות': 'spyglass',
    'אבן החדה': 'flint_and_steel', 'אבן וברזל': 'flint_and_steel',
    
    // Weapons (נשק)
    'חרב': 'diamond_sword', 'חרבות': 'diamond_sword',
    'חרב יהלום': 'diamond_sword', 'חרב ברזל': 'iron_sword', 'חרב זהב': 'golden_sword',
    'חרב אבן': 'stone_sword', 'חרב עץ': 'wooden_sword', 'חרב נתרייט': 'netherite_sword',
    'קשת': 'bow', 'קשתות': 'bow',
    'קשת צולבת': 'crossbow', 'קשתות צולבות': 'crossbow',
    'חץ': 'arrow', 'חצים': 'arrow',
    'צידון': 'trident', 'צידונים': 'trident',
    'אלה': 'mace', 'אלות': 'mace',
    
    // Armor (שריון)
    'קסדה': 'diamond_helmet', 'קסדות': 'diamond_helmet',
    'שריון': 'diamond_chestplate', 'שריונים': 'diamond_chestplate',
    'מכנסיים': 'diamond_leggings', 'מכנסי שריון': 'diamond_leggings',
    'מגפיים': 'diamond_boots', 'מגפי שריון': 'diamond_boots',
    'מגן': 'shield', 'מגנים': 'shield',
    
    // Food (אוכל)
    'אוכל': 'cooked_beef', 'בשר': 'beef', 'בשר מבושל': 'cooked_beef',
    'לחם': 'bread', 'לחמים': 'bread',
    'תפוח': 'apple', 'תפוחים': 'apple', 'תפוח זהב': 'golden_apple',
    'עוגיה': 'cookie', 'עוגיות': 'cookie',
    'עוגה': 'cake', 'עוגות': 'cake',
    'דגן': 'wheat', 'חיטה': 'wheat',
    'גזר': 'carrot', 'גזרים': 'carrot',
    'תפוח אדמה': 'potato', 'תפוחי אדמה': 'potato',
    'תפוח אדמה אפוי': 'baked_potato',
    'סלק': 'beetroot', 'סלקים': 'beetroot',
    'מרק': 'mushroom_stew', 'מרקים': 'mushroom_stew',
    'דג': 'cod', 'דגים': 'cod', 'דג מבושל': 'cooked_cod',
    'סלמון': 'salmon', 'סלמון מבושל': 'cooked_salmon',
    'עוף': 'chicken', 'עוף מבושל': 'cooked_chicken',
    'חזיר': 'porkchop', 'חזיר מבושל': 'cooked_porkchop',
    'כבש': 'mutton', 'כבש מבושל': 'cooked_mutton',
    'ארנב': 'rabbit', 'ארנב מבושל': 'cooked_rabbit',
    'מלון': 'melon', 'מלונים': 'melon',
    'אבטיח': 'melon_slice', 'פרוסת אבטיח': 'melon_slice',
    'דלעת': 'pumpkin', 'דלעות': 'pumpkin',
    'פטריה': 'mushroom', 'פטריות': 'mushroom',
    'ביצה': 'egg', 'ביצים': 'egg',
    'חלב': 'milk_bucket', 'דלי חלב': 'milk_bucket',
    'סוכר': 'sugar', 'מקל סוכר': 'sugar_cane',
    'קקאו': 'cocoa_beans', 'שעועיות קקאו': 'cocoa_beans',
    
    // Materials & Resources (חומרים ומשאבים)
    'יהלום': 'diamond', 'יהלומים': 'diamond',
    'זהב': 'gold_ingot', 'מטיל זהב': 'gold_ingot', 'זהב גולמי': 'raw_gold',
    'ברזל': 'iron_ingot', 'מטיל ברזל': 'iron_ingot', 'ברזל גולמי': 'raw_iron',
    'נחושת': 'copper_ingot', 'מטיל נחושת': 'copper_ingot', 'נחושת גולמית': 'raw_copper',
    'פחם': 'coal', 'פחמים': 'coal',
    'לפיד': 'torch', 'לפידים': 'torch',
    'מקל': 'stick', 'מקלות': 'stick',
    'חוט': 'string', 'חוטים': 'string',
    'עור': 'leather', 'עורות': 'leather',
    'נוצה': 'feather', 'נוצות': 'feather',
    'אבק רדסטון': 'redstone', 'רדסטון': 'redstone',
    'לזורד': 'lapis_lazuli', 'לפיס לזולי': 'lapis_lazuli',
    'אמרלד': 'emerald', 'אמרלדים': 'emerald',
    'קוורץ': 'quartz', 'קוורץ נתר': 'nether_quartz',
    'פנינה': 'ender_pearl', 'פנינות אנדר': 'ender_pearl',
    'עין אנדר': 'ender_eye', 'עיני אנדר': 'ender_eye',
    'כוכב נתר': 'nether_star', 'כוכבי נתר': 'nether_star',
    'נתרייט': 'netherite_ingot', 'שרידי נתרייט': 'netherite_scrap',
    'ארגמן': 'blaze_rod', 'מוט ארגמן': 'blaze_rod',
    'אבק ארגמן': 'blaze_powder', 'אבקת ארגמן': 'blaze_powder',
    'דמעת גאסט': 'ghast_tear', 'דמעות גאסט': 'ghast_tear',
    'אבק חול נשמות': 'soul_sand', 'חול נשמות': 'soul_sand',
    
    // Blocks (בלוקים)
    'אבן': 'stone', 'אבנים': 'stone',
    'עץ': 'oak_log', 'עצים': 'oak_log', 'גזע': 'oak_log',
    'קרשים': 'oak_planks', 'קרשי עץ': 'oak_planks',
    'זכוכית': 'glass', 'זכוכיות': 'glass',
    'חול': 'sand', 'חולות': 'sand',
    'חצץ': 'gravel', 'חצצים': 'gravel',
    'אדמה': 'dirt', 'אדמות': 'dirt',
    'דשא': 'grass_block', 'בלוק דשא': 'grass_block',
    'לבנים': 'bricks', 'לבנה': 'brick',
    'אבן חלקה': 'smooth_stone', 'אבן מלוטשה': 'polished_stone',
    'קובלסטון': 'cobblestone', 'אבן גסה': 'cobblestone',
    'צמר': 'white_wool', 'צמר לבן': 'white_wool',
    'צמר אדום': 'red_wool', 'צמר כחול': 'blue_wool', 'צמר ירוק': 'green_wool',
    'צמר שחור': 'black_wool', 'צמר צהוב': 'yellow_wool', 'צמר ורוד': 'pink_wool',
    'קרח': 'ice', 'קרחים': 'ice', 'קרח כחול': 'blue_ice',
    'שלג': 'snow_block', 'בלוק שלג': 'snow_block',
    'ספוג': 'sponge', 'ספוגים': 'sponge',
    'אובסידיאן': 'obsidian', 'אובסידיאנים': 'obsidian',
    
    // Containers & Storage (מכולות ואחסון)
    'ארגז': 'chest', 'ארגזים': 'chest',
    'חבית': 'barrel', 'חביות': 'barrel',
    'כמות': 'hopper', 'כמויות': 'hopper',
    'משפך': 'hopper', 'משפכים': 'hopper',
    'כיור': 'furnace', 'כיורים': 'furnace', 'תנור': 'furnace',
    'שולחן': 'crafting_table', 'שולחן יצירה': 'crafting_table',
    'סדן': 'anvil', 'סדנים': 'anvil',
    'קסם': 'enchanting_table', 'שולחן קסמים': 'enchanting_table',
    'דלק': 'brewing_stand', 'מעמד חליטה': 'brewing_stand',
    
    // Buckets & Liquids (דליים ונוזלים)
    'דלי': 'bucket', 'דליים': 'bucket',
    'מים': 'water_bucket', 'דלי מים': 'water_bucket',
    'לבה': 'lava_bucket', 'דלי לבה': 'lava_bucket',
    'חלב': 'milk_bucket', 'דלי חלב': 'milk_bucket',
    'דג': 'cod_bucket', 'דלי דג': 'cod_bucket',
    
    // Transportation (תחבורה)
    'סירה': 'oak_boat', 'סירות': 'oak_boat',
    'עגלה': 'minecart', 'עגלות': 'minecart', 'עגלת מכרה': 'minecart',
    'אוכף': 'saddle', 'אוכפים': 'saddle',
    'רתמה': 'lead', 'רתמות': 'lead', 'חבל': 'lead',
    'סוס': 'horse_spawn_egg', 'סוסים': 'horse_spawn_egg',
    
    // Books & Education (ספרים וחינוך)
    'ספר': 'book', 'ספרים': 'book',
    'ספר וקולמוס': 'writable_book', 'ספר כתיבה': 'writable_book',
    'ספר כתוב': 'written_book', 'ספרים כתובים': 'written_book',
    'נייר': 'paper', 'ניירות': 'paper',
    'מפה': 'map', 'מפות': 'map',
    'קנה': 'sugar_cane', 'קני סוכר': 'sugar_cane',
    
    // Music & Sound (מוזיקה וקול)
    'תקליט': 'music_disc_13', 'תקליטים': 'music_disc_13',
    'תקליט 13': 'music_disc_13', 'תקליט cat': 'music_disc_cat',
    'תקליט blocks': 'music_disc_blocks', 'תקליט chirp': 'music_disc_chirp',
    'תקליט far': 'music_disc_far', 'תקליט mall': 'music_disc_mall',
    'תקליט mellohi': 'music_disc_mellohi', 'תקליט stal': 'music_disc_stal',
    'תקליט strad': 'music_disc_strd', 'תקליט ward': 'music_disc_ward',
    'תקליט wait': 'music_disc_wait', 'שופר': 'goat_horn',
    'פעמון': 'bell', 'פעמונים': 'bell',
    
    // Potions & Brewing (שיקויים וחליטה)
    'שיקוי': 'potion', 'שיקויים': 'potion',
    'שיקוי ריפוי': 'potion', 'שיקוי כוח': 'potion',
    'שיקוי מהירות': 'potion', 'שיקוי רעל': 'potion',
    'בקבוק': 'glass_bottle', 'בקבוקים': 'glass_bottle',
    'בקבוק מים': 'potion', 'בקבוק ריק': 'glass_bottle',
    
    // Redstone & Technical (רדסטון וטכני)
    'רדסטון': 'redstone', 'אבק רדסטון': 'redstone',
    'לחצן': 'oak_button', 'לחצנים': 'oak_button',
    'דלת': 'oak_door', 'דלתות': 'oak_door',
    'שער': 'oak_fence_gate', 'שערים': 'oak_fence_gate',
    'גדר': 'oak_fence', 'גדרות': 'oak_fence',
    'מנוף': 'lever', 'מנופים': 'lever',
    'פלטה': 'oak_pressure_plate', 'פלטות לחץ': 'oak_pressure_plate',
    'בוכנה': 'piston', 'בוכנות': 'piston', 'בוכנה דביקה': 'sticky_piston',
    'מנורה': 'redstone_lamp', 'מנורות': 'redstone_lamp',
    'חזר': 'repeater', 'חזרים': 'repeater', 'מחזר': 'repeater',
    'משווה': 'comparator', 'משווים': 'comparator',
    
    // Decoration & Miscellaneous (קישוט ושונות)
    'ציור': 'painting', 'ציורים': 'painting',
    'מסגרת': 'item_frame', 'מסגרות': 'item_frame',
    'סימן': 'oak_sign', 'סימנים': 'oak_sign', 'שלט': 'oak_sign',
    'דגל': 'white_banner', 'דגלים': 'white_banner',
    'עציץ': 'flower_pot', 'עציצים': 'flower_pot',
    'פרח': 'poppy', 'פרחים': 'poppy',
    'שושנה': 'poppy', 'חמנית': 'dandelion',
    'פטרייה': 'red_mushroom', 'פטריות': 'red_mushroom',
    'שטיח': 'white_carpet', 'שטיחים': 'white_carpet',
    'וילון': 'white_banner', 'וילונות': 'white_banner',
    
    // Seeds & Farming (זרעים וחקלאות)
    'זרעים': 'wheat_seeds', 'זרע': 'wheat_seeds',
    'זרעי דלעת': 'pumpkin_seeds', 'זרעי מלון': 'melon_seeds',
    'זרעי סלק': 'beetroot_seeds', 'זרעי גזר': 'carrot',
    'עצמות': 'bone', 'אבק עצם': 'bone_meal',
    'דשן': 'bone_meal', 'קומפוסט': 'composter',
    
    // Spawn Eggs (ביצי הטלה)
    'ביצת זומבי': 'zombie_spawn_egg', 'ביצת שלד': 'skeleton_spawn_egg',
    'ביצת עכביש': 'spider_spawn_egg', 'ביצת קריפר': 'creeper_spawn_egg',
    'ביצת פרה': 'cow_spawn_egg', 'ביצת חזיר': 'pig_spawn_egg',
    'ביצת כבשה': 'sheep_spawn_egg', 'ביצת עוף': 'chicken_spawn_egg',
    'ביצת זאב': 'wolf_spawn_egg', 'ביצת חתול': 'cat_spawn_egg',
    'ביצת סוס': 'horse_spawn_egg', 'ביצת אנדרמן': 'enderman_spawn_egg',
    'ביצת דרקון': 'ender_dragon_spawn_egg'
  },
  
  entities: {
    'זומבי': 'zombie',
    'זומבים': 'zombie',
    'שלד': 'skeleton',
    'שלדים': 'skeleton',
    'עכביש': 'spider',
    'עכבישים': 'spider',
    'קריפר': 'creeper',
    'קריפרים': 'creeper',
    'פרה': 'cow',
    'פרות': 'cow',
    'חזיר': 'pig',
    'חזירים': 'pig',
    'כבש': 'sheep',
    'כבשים': 'sheep',
    'עוף': 'chicken',
    'עופות': 'chicken',
    'סוס': 'horse',
    'סוסים': 'horse',
    'כלב': 'wolf',
    'כלבים': 'wolf',
    'חתול': 'cat',
    'חתולים': 'cat',
    'דרקון': 'ender_dragon',
    'ויתר': 'wither'
  },
  
  gamemodes: {
    'הישרדות': 'survival',
    'יצירתי': 'creative',
    'הרפתקה': 'adventure',
    'צופה': 'spectator'
  },
  
  weather: {
    'גשם': 'rain',
    'רעם': 'thunder',
    'שמש': 'clear',
    'נקה': 'clear'
  },
  
  timeOfDay: {
    'יום': 'day',
    'לילה': 'night',
    'בוקר': 'dawn',
    'ערב': 'dusk',
    'צהריים': 'noon',
    'חצות': 'midnight'
  },
  
  difficulty: {
    'קל': 'easy',
    'בינוני': 'normal',
    'קשה': 'hard',
    'שלום': 'peaceful'
  },
  
  effects: {
    'כוח': 'strength',
    'מהירות': 'speed',
    'קפיצה': 'jump_boost',
    'ריפוי': 'regeneration',
    'עמידות': 'resistance',
    'אש': 'fire_resistance',
    'מים': 'water_breathing',
    'ראיית לילה': 'night_vision',
    'בריאות': 'health_boost',
    'רעב': 'hunger',
    'חולשה': 'weakness',
    'רעל': 'poison',
    'בחילה': 'nausea'
  },
  
  materials: {
    'אבן': 'stone',
    'אבנים': 'stone',
    'אבני': 'stone',
    'קובלסטון': 'cobblestone',
    'אבן בינוני': 'cobblestone',
    'עץ': 'oak_planks',
    'עצים': 'oak_planks',
    'קרשי עץ': 'oak_planks',
    'אלון': 'oak_planks',
    'זכוכית': 'glass',
    'זכוכיות': 'glass',
    'חול': 'sand',
    'חולות': 'sand',
    'חצץ': 'gravel',
    'אדמה': 'dirt',
    'אדמות': 'dirt',
    'דשא': 'grass_block',
    'לבנים': 'bricks',
    'לבנה': 'bricks',
    'אבן לבנה': 'stone_bricks',
    'אבנים לבנות': 'stone_bricks',
    'ברזל': 'iron_block',
    'זהב': 'gold_block',
    'יהלום': 'diamond_block',
    'יהלומים': 'diamond_block',
    'צמר': 'white_wool',
    'צמרים': 'white_wool',
    'צמר לבן': 'white_wool',
    'צמר אדום': 'red_wool',
    'צמר כחול': 'blue_wool',
    'צמר ירוק': 'green_wool',
    'לוחות אבן': 'stone_slab',
    'מדרגות': 'stone_stairs',
    'מדרגות אבן': 'stone_stairs'
  },
  
  dimensions: {
    'קטן': { width: 3, height: 3, length: 3 },
    'קטנה': { width: 3, height: 3, length: 3 },
    'קטנים': { width: 3, height: 3, length: 3 },
    'בינוני': { width: 5, height: 5, length: 5 },
    'בינונית': { width: 5, height: 5, length: 5 },
    'בינוניים': { width: 5, height: 5, length: 5 },
    'גדול': { width: 10, height: 10, length: 10 },
    'גדולה': { width: 10, height: 10, length: 10 },
    'גדולים': { width: 10, height: 10, length: 10 },
    'ענק': { width: 20, height: 20, length: 20 },
    'ענקית': { width: 20, height: 20, length: 20 },
    'ענקים': { width: 20, height: 20, length: 20 }
  },
  
  directions: {
    'צפון': 'north',
    'דרום': 'south', 
    'מזרח': 'east',
    'מערב': 'west',
    'למעלה': 'up',
    'למטה': 'down',
    'קדימה': 'forward',
    'אחורה': 'backward',
    'ימינה': 'right',
    'שמאלה': 'left'
  }
};

function processHebrewCommand(input) {
  const words = input.toLowerCase().split(/\s+/);
  const result = {
    action: null,
    structure: null,
    material: null,
    dimensions: null,
    direction: null,
    item: null,
    entity: null,
    gamemode: null,
    weather: null,
    timeOfDay: null,
    difficulty: null,
    effect: null,
    amount: null,
    player: null,
    originalInput: input
  };

  // Check for multi-word phrases first
  const fullText = input.toLowerCase();
  
  // Check for compound actions
  if (fullText.includes('מזג אויר') || fullText.includes('מזג-אויר')) {
    result.action = 'weather';
  } else if (fullText.includes('מצב משחק') || fullText.includes('מוד')) {
    result.action = 'gamemode';
  } else if (fullText.includes('רמת קושי')) {
    result.action = 'difficulty';
  } else if (fullText.includes('שנה ליצירתי') || fullText.includes('שנה להישרדות') || fullText.includes('שנה להרפתקה') || fullText.includes('שנה לצופה')) {
    result.action = 'gamemode';
    if (fullText.includes('יצירתי')) result.gamemode = 'creative';
    else if (fullText.includes('הישרדות')) result.gamemode = 'survival';
    else if (fullText.includes('הרפתקה')) result.gamemode = 'adventure';
    else if (fullText.includes('צופה')) result.gamemode = 'spectator';
  } else if (fullText.includes('שנה ליום') || fullText.includes('שנה ללילה') || fullText.includes('שנה לצהריים') || fullText.includes('שנה לחצות')) {
    result.action = 'time';
    if (fullText.includes('יום')) result.timeOfDay = 'day';
    else if (fullText.includes('לילה')) result.timeOfDay = 'night';
    else if (fullText.includes('צהריים')) result.timeOfDay = 'noon';
    else if (fullText.includes('חצות')) result.timeOfDay = 'midnight';
  } else if (fullText.includes('שנה לקל') || fullText.includes('שנה לקשה') || fullText.includes('שנה לבינוני') || fullText.includes('שנה לשלום')) {
    result.action = 'difficulty';
    if (fullText.includes('קל')) result.difficulty = 'easy';
    else if (fullText.includes('קשה')) result.difficulty = 'hard';
    else if (fullText.includes('בינוני')) result.difficulty = 'normal';
    else if (fullText.includes('שלום')) result.difficulty = 'peaceful';
  } else if (fullText.includes('זמן') && (fullText.includes('זומבי') || fullText.includes('פרה') || fullText.includes('עכביש') || fullText.includes('שלד') || fullText.includes('קריפר') || fullText.includes('חזיר') || fullText.includes('כבש') || fullText.includes('עוף') || fullText.includes('סוס') || fullText.includes('כלב') || fullText.includes('חתול') || fullText.includes('דרקון') || fullText.includes('ויתר'))) {
    result.action = 'summon';
  }
  
  // Extract numbers for amounts
  const numberMatch = input.match(/\d+/);
  if (numberMatch) {
    result.amount = parseInt(numberMatch[0]);
  }
  
  // Extract player names (assuming they start with @)
  const playerMatch = input.match(/@\w+/);
  if (playerMatch) {
    result.player = playerMatch[0];
  }

  // Check for multi-word items first
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const twoWordPhrase = word + ' ' + (words[i+1] || '');
    const threeWordPhrase = word + ' ' + (words[i+1] || '') + ' ' + (words[i+2] || '');
    
    // Check three-word phrases first
    if (hebrewDictionary.items[threeWordPhrase]) {
      result.item = hebrewDictionary.items[threeWordPhrase];
      continue;
    }
    
    // Then two-word phrases
    if (hebrewDictionary.items[twoWordPhrase]) {
      result.item = hebrewDictionary.items[twoWordPhrase];
      continue;
    }
  }
  
  for (const word of words) {
    // Check existing dictionaries
    if (hebrewDictionary.actions[word]) {
      result.action = hebrewDictionary.actions[word];
    }
    
    if (hebrewDictionary.structures[word]) {
      result.structure = hebrewDictionary.structures[word];
    }
    
    if (hebrewDictionary.materials[word]) {
      result.material = hebrewDictionary.materials[word];
    }
    
    if (hebrewDictionary.dimensions[word]) {
      result.dimensions = hebrewDictionary.dimensions[word];
    }
    
    if (hebrewDictionary.directions[word]) {
      result.direction = hebrewDictionary.directions[word];
    }
    
    // Check new dictionaries
    if (hebrewDictionary.items[word]) {
      result.item = hebrewDictionary.items[word];
    }
    
    
    if (hebrewDictionary.entities[word]) {
      result.entity = hebrewDictionary.entities[word];
    }
    
    if (hebrewDictionary.gamemodes[word]) {
      result.gamemode = hebrewDictionary.gamemodes[word];
    }
    
    if (hebrewDictionary.weather[word]) {
      result.weather = hebrewDictionary.weather[word];
    }
    
    if (hebrewDictionary.timeOfDay[word]) {
      result.timeOfDay = hebrewDictionary.timeOfDay[word];
    }
    
    if (hebrewDictionary.difficulty[word]) {
      result.difficulty = hebrewDictionary.difficulty[word];
    }
    
    if (hebrewDictionary.effects[word]) {
      result.effect = hebrewDictionary.effects[word];
    }
  }

  // Set defaults based on context
  if (result.structure && !result.material) {
    result.material = result.structure.defaultMaterial;
  }

  if (!result.dimensions && (result.action === 'build' || result.action === 'create' || result.action === 'fill')) {
    result.dimensions = { width: 5, height: 5, length: 5 };
  }
  
  if (!result.amount && (result.action === 'give')) {
    result.amount = 1;
  }

  return result;
}

module.exports = {
  processHebrewCommand,
  hebrewDictionary
};