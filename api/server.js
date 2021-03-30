const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const Diner = require("./Diner/Diner-Routes");
const Operator = require("./Operator/Operator-Routes");
const Truck = require("./Trucks/Truck-Routes");
const Menu = require("./Menu/Menu-Router");
const Item = require("./Items/Item-Routes");
const TruckMenu = require("./Truck_Menu_Items/Truck-Menu-Router");
const DinerAuth = require("./Diner/Diner-Auth");
const OperatorAuth = require("./Operator/Operator-Auth");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

//Truck-Menu endpoints
server.use("/api/truckmenu", TruckMenu);

//Item endpoints
server.use("/api/item", Item);

//Menu endpoints
server.use("/api/menu", Menu);

//Truck endpoints
server.use("/api/truck", Truck);

//Operator Auth
server.use("/operator", OperatorAuth);

//Operator endpoints
server.use("/api/operator", Operator);

//Diner Auth
server.use("/diner", DinerAuth);

//Diner endpoints
server.use("/api/dine", Diner);

//base endpoint
server.get("/", (req, res) => {
  res.json({
    API: "Online",
    DINER_ENDPOINTS: {
      getAll: "GET/api/dine",
      post: "POST/api/dine",
      getByID: "GET/api/dine/id",
      delete: "DELETE/api/dine/id",
      update: "PUT/api/dine/id",
      postLocation: "POST/api/dine/location",
      getLocationByID: "GET/api/dine/id/location",
      updateLocation: "PUT/api/dine/id/location",
    },
    OPERATOR_ENDPOINTS: {
      getAll: "GET/api/operator",
      getByID: "GET/api/operator/id",
      post: "POST/api/operator",
    },
    TRUCK_ENDPOINTS: {
      getAll: "GET/api/truck",
      post: "POST/api/truck",
      getByID: "GET/api/truck/id",
      delete: "DELETE/api/truck/id",
      update: "PUT/api/truck/id",
      postLocation: "POST/api/truck/location",
      getLocationByID: "GET/api/truck/id/location",
      updateLocation: "PUT/api/truck/id/location",
    },
  });
});

module.exports = server;
