import axios from 'axios';

interface TranslationResult {
  command: string;
  description?: string;
  materials?: string[];
}

interface ItemCategory {
  name: string;
  icon: string;
  items: Array<{
    english: string;
    hebrew: string;
    description: string;
  }>;
}

/**
 * Translates Hebrew commands to Minecraft commands using the existing web service
 */
export class HebrewCommandTranslator {
  private baseUrl: string;

  constructor(baseUrl: string = 'http://localhost:3001') {
    this.baseUrl = baseUrl;
  }

  /**
   * Translate a Hebrew command to a Minecraft command
   */
  async translate(hebrewCommand: string): Promise<TranslationResult> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/generate-command`, {
        hebrewInput: hebrewCommand
      }, {
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data && response.data.command) {
        return {
          command: response.data.command.replace(/^\//, ''), // Remove leading slash for RCON
          description: response.data.description,
          materials: response.data.materials
        };
      } else {
        throw new Error('Invalid response format from translation service');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNREFUSED') {
          throw new Error('Translation service is not available. Make sure the Hebrew commands server is running on port 3001.');
        } else if (error.response) {
          throw new Error(`Translation service error: ${error.response.data?.error || error.response.statusText}`);
        } else if (error.request) {
          throw new Error('No response from translation service. Check if the server is running.');
        }
      }
      throw new Error(`Translation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Get available item categories (fallback data if service unavailable)
   */
  async getItemCategories(): Promise<Record<string, ItemCategory>> {
    try {
      // Try to get from the running service first
      const response = await axios.get(`${this.baseUrl}/api/categories`, {
        timeout: 5000
      });
      return response.data;
    } catch {
      // Fallback to local data
      return this.getFallbackCategories();
    }
  }

  /**
   * Get command examples in markdown format
   */
  async getExamples(): Promise<string> {
    return `# Hebrew Command Examples

## Building Commands (פקודות בנייה)
- **Hebrew:** בנה קיר
  **Minecraft:** \`/fill ~0 ~0 ~0 ~10 ~5 ~1 stone\`
  **Description:** Build a stone wall

- **Hebrew:** צור בית
  **Minecraft:** \`/fill ~0 ~0 ~0 ~10 ~5 ~10 oak_planks hollow\`
  **Description:** Create a wooden house frame

- **Hebrew:** מלא באבן
  **Minecraft:** \`/fill ~-5 ~-1 ~-5 ~5 ~-1 ~5 stone\`
  **Description:** Fill area with stone

## Player Commands (פקודות שחקן)
- **Hebrew:** תן לי חרב יהלום
  **Minecraft:** \`/give @p diamond_sword 1\`
  **Description:** Give diamond sword

- **Hebrew:** תן לי 10 יהלומים
  **Minecraft:** \`/give @p diamond 10\`
  **Description:** Give 10 diamonds

- **Hebrew:** שנה ליצירתי
  **Minecraft:** \`/gamemode creative @p\`
  **Description:** Change to creative mode

## World Commands (פקודות עולם)
- **Hebrew:** שנה ליום
  **Minecraft:** \`/time set day\`
  **Description:** Set time to day

- **Hebrew:** גשם
  **Minecraft:** \`/weather rain\`
  **Description:** Set weather to rain

- **Hebrew:** שמש
  **Minecraft:** \`/weather clear\`
  **Description:** Clear weather

## Entity Commands (פקודות יצורים)
- **Hebrew:** זמן זומבי
  **Minecraft:** \`/summon zombie ~ ~ ~\`
  **Description:** Spawn a zombie

- **Hebrew:** זמן 5 פרות
  **Minecraft:** \`/summon cow ~ ~ ~ {Count:5}\`
  **Description:** Spawn 5 cows

- **Hebrew:** הרג זומבים
  **Minecraft:** \`/kill @e[type=zombie]\`
  **Description:** Kill all zombies
`;
  }

  /**
   * Fallback item categories when service is unavailable
   */
  private getFallbackCategories(): Record<string, ItemCategory> {
    return {
      tools: {
        name: "כלים",
        icon: "⛏️",
        items: [
          { english: "diamond_sword", hebrew: "חרב יהלום", description: "חרב חזקה מיהלום" },
          { english: "iron_pickaxe", hebrew: "מגרפה ברזל", description: "מגרפה לכריית אבן" },
          { english: "diamond_pickaxe", hebrew: "מגרפה יהלום", description: "מגרפה הכי חזקה" }
        ]
      },
      blocks: {
        name: "בלוקים",
        icon: "🧱",
        items: [
          { english: "stone", hebrew: "אבן", description: "אבן בסיסית" },
          { english: "oak_planks", hebrew: "קרשי עץ", description: "קרשי עץ אלון" },
          { english: "diamond_block", hebrew: "בלוק יהלום", description: "בלוק מיהלום" }
        ]
      },
      food: {
        name: "אוכל",
        icon: "🍞",
        items: [
          { english: "bread", hebrew: "לחם", description: "לחם רגיל" },
          { english: "golden_apple", hebrew: "תפוח זהב", description: "תפוח מיוחד" },
          { english: "cooked_beef", hebrew: "בשר בקר מבושל", description: "בשר מבושל" }
        ]
      }
    };
  }

  /**
   * Test connection to the translation service
   */
  async testConnection(): Promise<boolean> {
    try {
      const response = await axios.get(`${this.baseUrl}/health`, {
        timeout: 3000
      });
      return response.status === 200;
    } catch {
      return false;
    }
  }

  /**
   * Set the base URL for the translation service
   */
  setBaseUrl(url: string) {
    this.baseUrl = url;
  }
}