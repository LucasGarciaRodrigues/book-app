import Fastify from 'fastify';

import bookRoutes from "./src/routes/bookRoutes.js"
  
const hostname = '127.0.0.1';
const port = 3000;
const prefix = '/bookAPI/';

const app = Fastify({ logger: false });

app.register(bookRoutes, { prefix: prefix });

const start = async () => {
  try {
    await app.listen({ port: port });
    console.log(`Server running at http://${hostname}:${port}${prefix}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();