# MCP Think Tool Server

[![npm version](https://img.shields.io/npm/v/think-tool-mcp.svg)](https://www.npmjs.com/package/think-tool-mcp)

[![license](https://img.shields.io/npm/l/think-tool-mcp.svg)](https://www.npmjs.com/package/think-tool-mcp)

A Model Context Protocol (MCP) server implementing the "think" tool for improving Claude's complex reasoning capabilities.

## Overview

This MCP server implements the "think" tool as described in Anthropic's [blog post](https://www.anthropic.com/engineering/claude-think-tool), which provides Claude with a dedicated space for structured thinking during complex problem-solving tasks. The think tool has been shown to significantly improve performance in complex tasks requiring policy adherence and reasoning in long chains of tool calls.

## Features

- **Structured Thinking Space**: Provides Claude with a dedicated place to break down complex problems
- **Thought History**: Maintains a log of all thoughts with timestamps for reference
- **Clean Slate Option**: Allows clearing thought history when starting fresh

## Installation

### Running with npx

```bash
npx -y think-tool-mcp
```

### Manual Installation

```bash
npm install -g think-tool-mcp
```

### Running on Cursor

Configuring Cursor 🖥️
Note: Requires Cursor version 0.45.6+

To configure Think Tool MCP in Cursor:

1. Open Cursor Settings
2. Go to Features > MCP Servers
3. Click "+ Add New MCP Server"
4. Enter the following:
    - Name: "think-tool-mcp" (or your preferred name)
    - Type: "command"
    - Command: `npx -y think-tool-mcp`
