import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

export class ThinkToolServer {
  private mcp: McpServer;

  constructor(serverName: string = "think-tool") {
    // Initialize MCP server
    this.mcp = new McpServer({
      name: serverName,
      version: "0.1.0"
    });

    // Register tools
    this.registerTools();
  }

  private registerTools(): void {
    // Register the think tool
    this.mcp.tool(
      "think",
      `Use this tool to think about something. It will not obtain new information or change anything. Use it when complex reasoning is needed.

      Args:
      thought: A thought to think about. This can be structured reasoning, step-by-step analysis, policy verification, or any other mental process that helps with problem-solving.`,
      { thought: z.string() },
      async ({ thought }) => {
        // Return a confirmation
        return {
          content: [{
            type: "text",
            text: thought.length > 50
              ? `Thought: ${thought.substring(0, 50)}...`
              : `Thought: ${thought}`
          }]
        };
      }
    );
  }

  async run(): Promise<void> {
    const serverTransport = new StdioServerTransport();
    await this.mcp.connect(serverTransport);
  }
}
