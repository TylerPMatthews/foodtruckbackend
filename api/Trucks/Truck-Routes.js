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

//Delete a truck by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const rows = await Truck.remove(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

// Get truck by ID
router.get("/:id", async (req, res, next) => {
  try {
    const rows = await Truck.getByID(req.params.id);
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


//Get truck location by truck ID
router.get("/operator/location/:id", async (req, res, next) => {
  try {
    const rows = await Truck.getLocationByOID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get location by ID
router.get("/location/:id", async (req, res, next) => {
  try {
    const rows = await Truck.getLocationByID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});
//Get Truck by Operator ID
router.get("/operator/:id", async (req, res, next) => {
  try {
    const rows = await Truck.getTruckByOP(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});
//Edit truck location by ID
router.put("/operator/location/edit/:id", async (req, res, next) => {
  try {
    const rows = await Truck.editLocationByID(req.params.id, req.body);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
