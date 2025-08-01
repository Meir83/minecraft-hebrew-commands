# Minecraft Hebrew Commands Generator

A comprehensive web application that generates Minecraft commands from Hebrew natural language input. Users can type commands in Hebrew like "בנה קיר" (build a wall), "תן לי חרב" (give me a sword), or "זמן זומבי" (summon zombie) and get valid Minecraft commands instantly.

## Features

- **Advanced Hebrew NLP Processing**: Understands complex Hebrew commands and translates them to Minecraft actions
- **Comprehensive Command Support**: Supports all major Minecraft command types:
  - **Building Commands**: `/fill`, `/setblock`, structures (walls, houses, towers, etc.)
  - **Player Commands**: `/give`, `/tp`, `/gamemode`, `/effect`, `/enchant`
  - **World Commands**: `/time`, `/weather`, `/difficulty`
  - **Entity Commands**: `/summon`, `/kill` with entity targeting
- **Intelligent Context Detection**: Recognizes complex phrases like "שנה ליצירתי" (change to creative)
- **Material & Item Suggestions**: Provides intelligent recommendations for blocks, items, and entities
- **RTL Support**: Full Hebrew right-to-left text support
- **Modern UI**: Beautiful Material-UI interface with categorized command examples
- **Command Validation**: Ensures all generated commands are syntactically correct
- **Multi-Entity Support**: Can summon multiple entities with single commands

## Project Structure

```
minecraft-hebrew-commands/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.js         # Main application component
│   │   └── index.js       # Application entry point
│   ├── public/
│   └── package.json
├── server/                 # Node.js backend
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   │   ├── hebrewProcessor.js    # Hebrew NLP processing
│   │   ├── commandGenerator.js   # Minecraft command generation
│   │   └── commandValidator.js   # Command validation
│   ├── database/          # Database logic
│   └── server.js          # Server entry point
└── package.json           # Root package.json

```

## Installation

1. Install dependencies for all components:
```bash
npm run install:all
```

2. Copy environment variables:
```bash
cp server/.env.example server/.env
```

3. Start the development server:
```bash
npm run dev
```

This will start:
- Frontend (React) on http://localhost:3000
- Backend (Node.js) on http://localhost:5000

## Usage Examples

### Building Commands
| Hebrew Input | Generated Command | Materials |
| בנה קיר | `/fill ~ ~ ~ ~5 ~5 ~ stone` | stone |
| צור בית גדול | `/fill ~ ~ ~ ~10 ~10 ~10 oak_planks hollow` | oak_planks, oak_door, glass_pane |
| מלא באבן | `/fill ~ ~ ~ ~5 ~5 ~5 stone` | stone |
| בנה מגדל | `/fill ~ ~ ~ ~5 ~15 ~5 cobblestone hollow` | cobblestone, ladder |

### Player Commands
| Hebrew Input | Generated Command | Description |
|-------------|------------------|-------------|
| תן לי חרב | `/give @p diamond_sword 1` | Give diamond sword |
| תן לי 10 יהלומים | `/give @p diamond 10` | Give 10 diamonds |
| העבר אותי | `/tp @p ~ ~ ~` | Teleport player |
| שנה ליצירתי | `/gamemode creative @p` | Change to creative mode |
| הוסף כוח | `/effect give @p strength 60 1` | Add strength effect |

### World Commands
| Hebrew Input | Generated Command | Description |
|-------------|------------------|-------------|
| שנה ליום | `/time set 1000` | Change to day |
| שנה ללילה | `/time set 13000` | Change to night |
| גשם | `/weather rain` | Make it rain |
| שנה לקל | `/difficulty easy` | Change to easy |

### Entity Commands
| Hebrew Input | Generated Command | Description |
|-------------|------------------|-------------|
| זמן זומבי | `/summon zombie ~ ~ ~` | Summon zombie |
| זמן 5 פרות | `/summon cow ~ ~ ~; /summon cow ~ ~ ~; ...` | Summon 5 cows |
| הרג זומבים | `/kill @e[type=zombie]` | Kill all zombies |

## Supported Hebrew Commands

### Building Actions (פעולות בנייה)
- בנה / בני / צור / צרי - Build/Create
- מלא / מלאי - Fill
- נקה / נקי - Clear
- הרס / הרסי - Destroy
- החלף / החליפי - Replace

### Player Actions (פעולות שחקן)
- תן / תני / נתן - Give
- העבר / העברי / טלפורט - Teleport
- שנה / שני / החלפה - Change
- הוסף / הוסיפי - Add (effects)
- כישוף / קסם - Enchant

### World Actions (פעולות עולם)
- זמן / שעה - Time
- מזג אויר / גשם / שמש / רעם - Weather
- קושי / רמת קושי - Difficulty

### Entity Actions (פעולות יצורים)
- זמן / זמני / קרא / קראי - Summon
- הרג / הרגי - Kill

### Structures (מבנים)
- קיר / קירות - Wall
- בית / בתים - House
- מגדל / מגדלים - Tower
- גשר / גשרים - Bridge
- רצפה / רצפות - Floor
- תקרה / תקרות - Ceiling
- חדר / חדרים - Room

### Comprehensive Item Categories

#### Tools & Equipment (כלים וציוד)
- **מגרפות** - Pickaxes (diamond_pickaxe, iron_pickaxe, etc.)
- **גרזנים** - Axes (diamond_axe, iron_axe, etc.)
- **אתות** - Shovels (diamond_shovel, iron_shovel, etc.)
- **מעדרים** - Hoes (diamond_hoe, iron_hoe, etc.)
- **מזמרות** - Shears
- **חכות דיג** - Fishing rods
- **מצפנים** - Compass
- **שעונים** - Clock
- **משקפות** - Spyglass

#### Weapons & Combat (נשק ולחימה)
- **חרבות** - Swords (diamond_sword, netherite_sword, etc.)
- **קשתות** - Bows & Crossbows
- **חצים** - Arrows
- **צידונים** - Tridents
- **אלות** - Maces
- **מגנים** - Shields

#### Armor & Protection (שריון והגנה)
- **קסדות** - Helmets (diamond_helmet, iron_helmet, etc.)
- **שריונים** - Chestplates
- **מכנסיים** - Leggings
- **מגפיים** - Boots

#### Food & Consumables (אוכל ומוצרי צריכה)
- **לחם** - Bread, **עוגיות** - Cookies, **עוגות** - Cake
- **בשר מבושל** - Cooked meats (beef, chicken, pork, mutton, rabbit)
- **דגים** - Fish (cod, salmon)
- **תפוחים** - Apples, **תפוח זהב** - Golden apples
- **ירקות** - Vegetables (carrots, potatoes, beetroot)
- **מלונים** - Melons, **דלעות** - Pumpkins
- **חלב** - Milk, **ביצים** - Eggs

#### Materials & Resources (חומרים ומשאבים)
- **יהלומים** - Diamonds
- **מטילי מתכת** - Metal ingots (gold, iron, copper)
- **פחם** - Coal, **לפידים** - Torches
- **אבק רדסטון** - Redstone dust
- **לזורד** - Lapis lazuli, **אמרלדים** - Emeralds
- **פנינות אנדר** - Ender pearls, **עיני אנדר** - Ender eyes
- **כוכבי נתר** - Nether stars
- **נתרייט** - Netherite ingots
- **מקלות** - Sticks, **חוטים** - String, **עור** - Leather

#### Building Blocks (בלוקי בנייה)
- **אבן / קובלסטון** - Stone / Cobblestone
- **עץ / קרשים** - Wood logs / Planks
- **זכוכית** - Glass (all colors)
- **לבנים** - Bricks, **אבן לבנה** - Stone bricks
- **צמר צבעוני** - Colored wool (16 colors)
- **חול / חצץ / אדמה / דשא** - Natural blocks
- **קרח** - Ice, **שלג** - Snow blocks
- **אובסידיאן** - Obsidian

#### Containers & Crafting (מכולות ויצירה)
- **ארגזים** - Chests, **חביות** - Barrels
- **כיורים** - Furnaces, **כמויות** - Hoppers
- **שולחן יצירה** - Crafting tables
- **סדנים** - Anvils
- **שולחן קסמים** - Enchanting tables
- **מעמד חליטה** - Brewing stands

#### Transportation (תחבורה)
- **סירות** - Boats (all wood types)
- **עגלות מכרה** - Minecarts (various types)
- **אוכפים** - Saddles, **רתמות** - Leads

#### Music & Entertainment (מוזיקה ובידור)
- **תקליטים** - Music discs (13, cat, blocks, chirp, far, mall, etc.)
- **שופרות** - Goat horns
- **פעמונים** - Bells

#### Books & Knowledge (ספרים וידע)
- **ספרים** - Books (regular, writable, written)
- **מפות** - Maps, **נייר** - Paper

#### Potions & Alchemy (שיקויים ואלכימיה)
- **שיקויים** - Potions (strength, speed, healing, poison, etc.)
- **בקבוקים** - Bottles (glass, water)

#### Redstone & Technical (רדסטון וטכני)
- **לחצנים** - Buttons, **מנופים** - Levers
- **דלתות** - Doors, **שערים** - Gates
- **בוכנות** - Pistons, **מנורות** - Redstone lamps
- **חזרים** - Repeaters, **משווים** - Comparators

#### Decoration & Art (קישוט ואמנות)
- **ציורים** - Paintings, **מסגרות** - Item frames
- **סימנים** - Signs, **דגלים** - Banners
- **עציצים** - Flower pots, **פרחים** - Flowers
- **שטיחים** - Carpets

#### Farming & Agriculture (חקלאות וקרקע)
- **זרעים** - Seeds (wheat, pumpkin, melon, beetroot)
- **עצמות** - Bones, **דשן** - Bone meal

#### Spawn Eggs (ביצי הטלה)
- **ביצות מונסטרים** - Monster spawn eggs (zombie, skeleton, spider, creeper)
- **ביצות בעלי חיים** - Animal spawn eggs (cow, pig, sheep, chicken, horse)
- **ביצות יצורים מיוחדים** - Special creature eggs (enderman, dragon)


### Entities (יצורים)
- **Hostile**: זומבי / שלד / עכביש / קריפר - Monsters
- **Passive**: פרה / חזיר / כבש / עוף - Farm animals
- **Neutral**: כלב / חתול / סוס - Pets & rideable
- **Boss**: דרקון / ויתר - Boss mobs

### Game Modes (מצבי משחק)
- הישרדות - Survival
- יצירתי - Creative  
- הרפתקה - Adventure
- צופה - Spectator

### Time & Weather (זמן ומזג אויר)
- **Time**: יום / לילה / צהריים / חצות - Day/night cycle
- **Weather**: גשם / רעם / שמש / נקה - Weather types
- **Difficulty**: קל / בינוני / קשה / שלום - Difficulty levels

### Effects (אפקטים)
- **Positive**: כוח / מהירות / קפיצה / ריפוי - Beneficial effects
- **Protection**: עמידות / אש / מים / ראיית לילה - Resistance effects
- **Negative**: רעב / חולשה / רעל / בחילה - Debuffs

### Dimensions (מידות)
- קטן/קטנה - Small (3x3x3)
- בינוני/בינונית - Medium (5x5x5)
- גדול/גדולה - Large (10x10x10)
- ענק/ענקית - Huge (20x20x20)

## API Endpoints

### POST /api/generate-command
Generate a Minecraft command from Hebrew input.

**Building Command Example:**
```json
{
  "hebrewInput": "בנה קיר גדול מאבן"
}
```

**Response:**
```json
{
  "command": "/fill ~ ~ ~ ~10 ~10 ~ stone",
  "materials": ["stone"],
  "description": "בונה קיר ברוחב 10 ובגובה 10 בלוקים מחומר stone",
  "originalInput": "בנה קיר גדול מאבן"
}
```

**Player Command Example:**
```json
{
  "hebrewInput": "תן לי 10 יהלומים"
}
```

**Response:**
```json
{
  "command": "/give @p diamond 10",
  "materials": ["diamond"],
  "description": "נותן 10 diamond לשחקן @p",
  "originalInput": "תן לי 10 יהלומים"
}
```

**Entity Command Example:**
```json
{
  "hebrewInput": "זמן 5 פרות"
}
```

**Response:**
```json
{
  "command": "/summon cow ~ ~ ~; /summon cow ~ ~ ~; /summon cow ~ ~ ~; /summon cow ~ ~ ~; /summon cow ~ ~ ~",
  "materials": [],
  "description": "מזמן 5 cow במיקום ~ ~ ~",
  "originalInput": "זמן 5 פרות"
}
```

### GET /api/examples
Get categorized example Hebrew commands with their English translations and categories.

**Response:**
```json
[
  { "hebrew": "בנה קיר", "english": "build wall", "category": "בנייה" },
  { "hebrew": "תן לי חרב", "english": "give me sword", "category": "שחקן" },
  { "hebrew": "שנה ליום", "english": "change to day", "category": "עולם" },
  { "hebrew": "זמן זומבי", "english": "summon zombie", "category": "יצורים" }
]
```

## Development

### Frontend
The frontend is built with React and Material-UI, with full RTL (right-to-left) support for Hebrew text.

### Backend
The backend uses Node.js with Express, featuring:
- Hebrew natural language processing
- SQLite database for command templates and materials
- Command validation and generation

### Database
SQLite database stores:
- Command templates mapping Hebrew to Minecraft commands
- Material translations (Hebrew ↔ Minecraft IDs)
- User command history

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License