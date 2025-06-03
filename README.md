# MCP Think Tool Server

[![npm version](https://img.shields.io/npm/v/think-tool-mcp.svg)](https://www.npmjs.com/package/think-tool-mcp)
[![license](https://img.shields.io/npm/l/think-tool-mcp.svg)](https://www.npmjs.com/package/think-tool-mcp)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MCP](https://img.shields.io/badge/MCP-Model%20Context%20Protocol-blue)](https://modelcontextprotocol.io)

A Model Context Protocol (MCP) server that implements the "think" tool for enhancing complex reasoning capabilities in Large Language Models (LLMs). This tool provides LLMs with a dedicated space for structured thinking during problem-solving tasks, significantly improving performance in complex scenarios requiring policy adherence and multi-step reasoning.

## 🧠 Overview

The Think Tool MCP server is based on Anthropic's research demonstrating that providing LLMs with a dedicated "thinking space" dramatically improves performance on complex tasks. This tool allows any compatible LLM (Claude, GPT-4, and others) to:

- Break down complex problems into manageable steps
- Perform structured reasoning and analysis
- Verify policy compliance during decision-making
- Process and synthesize information from multiple tool calls
- Maintain context and logical flow in long reasoning chains

As described in [Anthropic's blog post](https://www.anthropic.com/engineering/claude-think-tool), the think tool has shown significant improvements in tasks requiring complex reasoning and policy adherence across different language models.

## ✨ Features

- **🔧 Structured Thinking Space**: Provides LLMs with a dedicated environment for complex reasoning
- **📝 Memory Aid**: Helps maintain context during long chains of tool calls
- **🎯 Policy Verification**: Enables careful policy adherence checking
- **🔍 Problem Decomposition**: Supports breaking down complex problems into steps
- **⚡ Lightweight**: Minimal overhead with efficient MCP implementation
- **🔌 Easy Integration**: Simple setup with popular AI platforms (Cursor, Claude Desktop, etc.)
- **🛠️ TypeScript**: Built with TypeScript for type safety and better development experience
- **🌐 Universal Compatibility**: Works with any LLM that supports the Model Context Protocol

## 🚀 Platform Configuration

### Cursor IDE

**Requirements**: Cursor version 0.45.6 or higher

1. Open **Cursor Settings** (`Cmd/Ctrl + ,`)
2. Navigate to **Features** → **MCP Servers**
3. Click **"+ Add New MCP Server"**
4. Configure the server:
   - **Name**: `think-tool-mcp` (or your preferred name)
   - **Type**: `command`
   - **Command**: `npx -y think-tool-mcp`
5. Save and restart Cursor

### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "think-tool": {
      "command": "npx",
      "args": ["-y", "think-tool-mcp"]
    }
  }
}
```

**Config file locations:**
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

### Other MCP-Compatible Platforms

This server works with any platform supporting the Model Context Protocol. Refer to your platform's documentation for MCP server configuration.

## 📊 Performance Analysis

Extensive research by Anthropic has demonstrated significant performance improvements when LLMs use the think tool. The following results showcase the measurable impact across different benchmarks and use cases.

### τ-Bench (Tau-Bench) Results

τ-Bench is a comprehensive benchmark designed to test LLM tool usage in realistic customer service scenarios. It evaluates the ability to navigate complex conversations, follow detailed policy guidelines, and maintain consistency across multiple task trials.

#### Airline Domain Performance

The airline domain represents a complex policy-heavy environment where precise adherence to detailed rules is critical.

| Configuration | k=1 | k=2 | k=3 | k=4 | k=5 |
|---------------|-----|-----|-----|-----|-----|
| **Think + Optimized Prompt** | **0.584** | **0.444** | **0.384** | **0.356** | **0.340** |
| Think Tool Alone | 0.404 | 0.254 | 0.186 | 0.140 | 0.100 |
| Extended Thinking | 0.412 | 0.290 | 0.232 | 0.192 | 0.160 |
| Baseline (No Think Tool) | 0.332 | 0.206 | 0.148 | 0.116 | 0.100 |

**Key Findings:**
- **54% relative improvement** in pass^1 metric (0.584 vs 0.370 baseline)
- Optimized prompting with examples dramatically enhanced performance
- Improvements maintained across all trial consistency levels (k=1 to k=5)

#### Retail Domain Performance

The retail domain has simpler policies, allowing the think tool to show benefits even without extensive prompting.

| Configuration | k=1 | k=2 | k=3 | k=4 | k=5 |
|---------------|-----|-----|-----|-----|-----|
| **Think Tool (No Prompt)** | **0.812** | **0.735** | **0.685** | **0.650** | **0.626** |
| Extended Thinking | 0.770 | 0.681 | 0.623 | 0.581 | 0.548 |
| Baseline | 0.783 | 0.695 | 0.643 | 0.607 | 0.583 |

**Key Findings:**
- **3.7% improvement** in pass^1 metric without additional prompting
- Demonstrates effectiveness across varying complexity levels
- Consistent performance gains maintained across multiple trials

### SWE-Bench Results

SWE-Bench evaluates coding performance on real-world software engineering tasks. The think tool contributed to Claude 3.7 Sonnet achieving state-of-the-art performance.

**Performance Impact:**
- **Baseline Score**: 62.3% (without think tool)
- **With Think Tool**: 64.9% (estimated based on 1.6% improvement)
- **Statistical Significance**: Welch's t-test: t(38.89) = 6.71, p < .001, d = 1.47
- **Sample Size**: 30 samples with think tool, 144 samples without

### Performance Insights

#### When Think Tool Excels

1. **Policy-Heavy Environments**: Up to 54% improvement when complex rule adherence is required
2. **Sequential Decision Making**: Significant gains when each action builds on previous ones
3. **Tool Output Analysis**: Enhanced performance when processing results from multiple tool calls
4. **Complex Domain Navigation**: Greater benefits in challenging domains (airline vs. retail)

#### Optimization Factors

1. **Domain-Specific Prompting**: Examples tailored to specific use cases dramatically improve effectiveness
2. **Complexity Correlation**: More complex domains benefit more from structured thinking
3. **Consistency Improvements**: Benefits maintained across multiple trial runs, indicating robustness
4. **Error Reduction**: Helps LLMs handle edge cases and unusual scenarios more effectively

### Comparative Analysis

| Approach | Airline Domain (k=1) | Retail Domain (k=1) | Implementation Effort |
|----------|---------------------|--------------------|--------------------|
| Baseline | 0.332 | 0.783 | None |
| Extended Thinking | 0.412 (+24%) | 0.770 (-1.7%) | Platform-dependent |
| Think Tool | 0.404 (+22%) | 0.812 (+3.7%) | **Minimal** |
| Think + Optimized Prompt | **0.584 (+76%)** | N/A | **Low** |

**Key Takeaway**: The think tool provides substantial performance improvements with minimal implementation overhead, making it an excellent choice for enhancing LLM capabilities in complex reasoning scenarios.

## 📦 Installation

### Quick Start with npx (Recommended)

The fastest way to get started:

```bash
npx -y think-tool-mcp
```

### Global Installation

For persistent usage across projects:

```bash
npm install -g think-tool-mcp
```

### Local Development Installation

For contributing or local development:

```bash
git clone https://github.com/abhinav-mangla/think-tool-mcp.git
cd think-tool-mcp
npm install
npm run build
npm start
```

## 🎯 Usage Examples

### Complex Problem Solving

```
Human: Help me optimize our company's supply chain with 5 warehouses and 12 retail locations.

LLM: I'll help you optimize your supply chain. Let me think through this systematically.

[Uses think tool]
Thought: This is a complex optimization problem requiring:
1. Analysis of warehouse-retail location distances
2. Shipping cost calculations between all pairs
3. Delivery time constraints evaluation
4. Inventory capacity considerations
5. Demand pattern analysis

I need to formulate this as a linear programming problem and consider both cost minimization and delivery time constraints...

[Proceeds with structured solution based on analysis]
```

### Policy Adherence

```
Human: Can I return this opened product after 45 days without a receipt?

LLM: Let me carefully check our return policy.

[Uses think tool]
Thought: Analyzing this return request:
- Item: 45 days old (exceeds standard 30-day window)
- No receipt available
- Package opened

Policy considerations:
- Standard returns require 30 days + receipt
- Store credit might be possible with purchase verification
- Product category affects policy (electronics vs. clothing)
- Loyalty members may have extended windows
- Manager override possibilities

[Provides policy-compliant response with available options]
```

### Multi-Tool Analysis

```
Human: Find inactive premium users (60+ days) and create a re-engagement campaign.

LLM: I'll search the database and create a targeted campaign.

[Runs database queries]
[Uses think tool]
Thought: Query results show 342 inactive premium users. Key patterns:
- 45% are in 6-12 month subscription cohort
- 72% last activity was "viewed dashboard"
- Only 8% used newest features
- 28% had support tickets before going inactive

Campaign strategy:
- Segment users by usage patterns
- Highlight unexplored features
- Address support-related pain points
- Personalize incentives based on history

[Creates targeted email campaign based on analysis]
```

## 🔧 API Reference

### Available Tools

#### `think`

Provides LLMs with a dedicated space for complex reasoning and analysis.

**Parameters:**
- `thought` (string, required): The thought process, reasoning, or analysis to record

**Description:**
The think tool accepts any structured thinking that an LLM needs to perform. This can include:
- Step-by-step problem analysis
- Policy verification workflows
- Multi-criteria decision making
- Information synthesis from multiple sources
- Complex reasoning chains

**Usage Pattern:**
LLMs will automatically use this tool when they need to engage in complex reasoning. The tool does not retrieve new information or make changes—it simply provides a space for structured thinking.

## 🏗️ Development

### Project Structure

```
think-tool-mcp/
├── src/
│   ├── index.ts          # CLI entry point
│   └── server.ts         # MCP server implementation
├── examples/
│   └── example_usage.md  # Usage examples
├── dist/                 # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

### Building from Source

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode
npm run dev

# Start the built server
npm start
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Requirements

- **Node.js**: Version 16 or higher
- **npm**: Comes with Node.js
- **MCP-compatible platform**: Cursor, Claude Desktop, or other MCP-supporting applications

## 🔍 Troubleshooting

### Common Issues

**Server not starting:**
- Ensure Node.js 16+ is installed
- Check that the command path is correct in your MCP configuration
- Verify no port conflicts exist

**Tool not appearing in AI platform:**
- Confirm MCP server is properly configured
- Restart your AI platform after configuration changes
- Check platform-specific MCP documentation

**Permission errors:**
- On Unix systems, ensure the binary is executable
- Try using `npx` instead of global installation

### Debug Mode

For development and debugging:

```bash
npm run dev
```

This runs the server with TypeScript directly and provides more detailed error information.

## 📚 Learn More

- [Model Context Protocol Documentation](https://modelcontextprotocol.io)
- [Anthropic's Think Tool Blog Post](https://www.anthropic.com/engineering/claude-think-tool)
- [MCP SDK Documentation](https://github.com/modelcontextprotocol/typescript-sdk)
- [Example Usage Guide](./examples/example_usage.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Abhinav Mangla**
- GitHub: [@abhinav-mangla](https://github.com/abhinav-mangla)
- Repository: [think-tool-mcp](https://github.com/abhinav-mangla/think-tool-mcp)

## 🙏 Acknowledgments

- Anthropic for the think tool research and methodology
- The Model Context Protocol team for the excellent framework
- The open-source community for contributions and feedback

---

<p align="center">
  <i>Enhancing AI reasoning, one thought at a time.</i>
</p>
