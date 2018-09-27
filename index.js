const Hapi = require("hapi");
const handler = require("./handler");

const server = new Hapi.Server({
  port: 8877
});

async function startServer() {
  await server.start();
}

server.route({
  method: "GET",
  path: "/api",
  handler
});

try {
  startServer();
} catch (error) {
  console.log(`Error while starting server: ${error.message}`);
  return;
}

console.log("Server running at: ", server.info.uri);
