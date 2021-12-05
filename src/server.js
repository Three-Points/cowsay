const express = require("express");

const { version } = require("../package.json");

const server = express();

server.set("version", version);
server.set("port", 8080);
server.set("url", "http://localhost:8080");

server.get("/", function (_, res) {
  res.send("GET request to the homepage");
});

module.exports = server;