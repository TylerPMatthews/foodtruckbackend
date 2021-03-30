const express = require("express");
const Truck = require("./Truck-Model");
const router = express.Router();

//Get all Trucks
router.get("/", async (req, res, next) => {
  try {
    const rows = await Truck.getAll();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});
//Post a new Truck
router.post("/", async (req, res, next) => {
  try {
    const rows = await Truck.post(req.body);
    res.status(201).json(rows);
  } catch (e) {
    next(e);
  }
});

//get all locations
router.get("/location", async (req, res, next) => {
  try {
    const rows = await Truck.getAllLocation();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Post location
router.post("/location", async (req, res, next) => {
  try {
    const rows = await Truck.postLocation(req.body);
    res.status(201).json(rows);
  } catch (e) {
    next(e);
  }
});

// Get trucks and location by ID
router.get("/:id", async (req, res, next) => {
  try {
    const rows = await Truck.getTruckALocation(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Edit a truck by ID
router.put("/:id", async (req, res, next) => {
  try {
    const rows = await Truck.edit(req.params.id, req.body);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get location by ID
router.get("/location:id", async (req, res, next) => {
  try {
    const rows = await Truck.getLocationByID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
