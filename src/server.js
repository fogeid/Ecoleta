const express = require("express");
const server = express();

server.use(express.static("public"));

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/create-point.html");
});

server.get("/search-results", (req, res) => {
    res.sendFile(__dirname + "/search-results.html");
});

server.listen(3000)