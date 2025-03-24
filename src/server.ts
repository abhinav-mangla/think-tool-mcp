import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

interface ThoughtEntry {
  timestamp: string;
  thought: string;
}

export class ThinkToolServer {
  private mcp: McpServer;
  private thoughtsLog: ThoughtEntry[] = [];

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
      `Use this tool to think about something. It will not obtain new information or change anything, but just append the thought to the log. Use it when complex reasoning or cache memory is needed.

      Args:
      thought: A thought to think about. This can be structured reasoning, step-by-step analysis, policy verification, or any other mental process that helps with problem-solving.`,
      { thought: z.string() },
      async ({ thought }) => {
        // Log the thought with a timestamp
        const timestamp = new Date().toISOString();
        this.thoughtsLog.push({
          timestamp,
          thought
        });

        // Return a confirmation
        return {
          content: [{
            type: "text",
            text: thought.length > 50
              ? `Thought recorded: ${thought.substring(0, 50)}...`
              : `Thought recorded: ${thought}`
          }]
        };
      }
    );

    // Register the get_thoughts tool
    this.mcp.tool(
      "get_thoughts",
      `Retrieve all thoughts recorded in the current session.
      This tool helps review the thinking process that has occurred so far.`,
      {},
      async () => {
        if (this.thoughtsLog.length === 0) {
          return {
            content: [{
              type: "text",
              text: "No thoughts have been recorded yet."
            }]
          };
        }

        const formattedThoughts = this.thoughtsLog.map((entry, index) =>
          `Thought #${index + 1} (${entry.timestamp}):\n${entry.thought}\n`
        );

        return {
          content: [{
            type: "text",
            text: formattedThoughts.join("\n")
          }]
        };
      }
    );

    // Register the clear_thoughts tool
    this.mcp.tool(
      "clear_thoughts",
      `Clear all recorded thoughts from the current session.
      Use this to start fresh if the thinking process needs to be reset.`,
      {},
      async () => {
        const count = this.thoughtsLog.length;
        this.thoughtsLog = [];

        return {
          content: [{
            type: "text",
            text: `Cleared ${count} recorded thoughts.`
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
