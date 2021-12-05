const express = require("express");
const cowsay = require("cowsay");

const { version } = require("../package.json");

const server = express();

server.set("version", version);
server.set("port", 8080);
server.set("url", "http://localhost:8080");

server.get("/", function (_, res) {
  res.setHeader("Content-Type", "text/txt");
  res.end(
    cowsay.say({
      text: "Hello World!",
      e: "oO",
      T: "U ",
    })
  );
});

server.get("/:message", function (req, res) {
    res.setHeader("Content-Type", "text/txt");
    res.end(
      cowsay.say({
        text: `${req.params.message}`,
        e: "oO",
        T: "U ",
      })
    );
  });

module.exports = server;
