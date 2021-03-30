const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const Diner = require("./Diner/Diner-Routes");
const Operator = require('./Operator/Operator-Routes');
const Truck = require('./Trucks/Truck-Routes');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

//Truck endpoints
server.use("/api/truck", Truck)

//Operator endpoints
server.use("/api/operator", Operator)

//Diner endpoints
server.use("/api/dine", Diner);

//base endpoint
server.get("/", (req, res) => {
  res.json({ API: "Online" });
});

module.exports = server;
