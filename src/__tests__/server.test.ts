jest.mock('@modelcontextprotocol/sdk/server/mcp.js', () => {
  class McpServerMock {
    public tools: Record<string, { description: string; schema: unknown; handler: (args: any) => Promise<any> }>; // eslint-disable-line @typescript-eslint/no-explicit-any
    constructor(_opts: { name: string; version: string }) {
      this.tools = {};
    }
    tool(name: string, description: string, schema: unknown, handler: (args: any) => Promise<any>) { // eslint-disable-line @typescript-eslint/no-explicit-any
      this.tools[name] = { description, schema, handler };
    }
    async connect(_transport: unknown) {
      return;
    }
  }
  return { McpServer: McpServerMock };
});

jest.mock('@modelcontextprotocol/sdk/server/stdio.js', () => {
  class StdioServerTransportMock {}
  return { StdioServerTransport: StdioServerTransportMock };
});

import { ThinkToolServer } from '../server';

describe('ThinkToolServer', () => {
  test('registers think tool with proper handler', async () => {
    const server = new ThinkToolServer('test-think-tool');
    const mcp: any = (server as any).mcp;
    expect(mcp.tools).toBeDefined();
    expect(Object.keys(mcp.tools)).toContain('think');

    const { handler } = mcp.tools['think'];
    const longThought = 'x'.repeat(60);
    const shortThought = 'hello world';

    const longRes = await handler({ thought: longThought });
    const shortRes = await handler({ thought: shortThought });

    expect(longRes.content[0].text).toMatch(/^Thought: x{50}\.\.\.$/);
    expect(shortRes.content[0].text).toBe('Thought: hello world');
  });

  test('run connects using stdio transport', async () => {
    const server = new ThinkToolServer('test');
    // Should not throw
    await expect(server.run()).resolves.toBeUndefined();
  });
});


