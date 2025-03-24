import { ThinkToolServer } from './server';

async function main() {
  const server = new ThinkToolServer();
  await server.run();
}

  main().catch(error => {
    console.error('Error starting Think Tool server:', error);
    process.exit(1);
  });
