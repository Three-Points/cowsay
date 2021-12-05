const server = require("./server");

server.listen(server.get("port"), () => {
  console.log(`⬢ CowSay - v${server.get("version")}`);
  console.log(`◌ listening on ${server.get("url")}`);
});
