const express = require("express");
const cowsay = require("cowsay");

const { version } = require("../package.json");

const server = express();

server.set("version", version);
server.set("port", 8080);
server.set("url", "http://localhost:8080");

/**
 * @description get cawsay hello world
 * @param {string} - route definition
 * @param {function} callback - callback function
 * @returns {string} - cawsay hello world
 *
 * @name callback
 * @param {object} _ - express request object
 * @param {object} res - express response object
 */
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

/**
 * @description get cawsay custome message
 * @param {string} - route definition
 * @param {function} callback - callback function
 * @returns {string} - cawsay custome message
 *
 * @name callback
 * @param {object} req - express request object
 * @param {object} res - express response object
 */
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
