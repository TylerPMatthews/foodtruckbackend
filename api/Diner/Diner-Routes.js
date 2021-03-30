const express = require("express");
const Diner = require("./Diner-Model");
const router = express.Router();

//Get all Diner accounts
router.get("/", async (req, res, next) => {
  try {
    const rows = await Diner.getAll();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Post a new Diner account
router.post("/", async (req, res, next) => {
  try {
    const rows = await Diner.post(req.body);
    res.status(201).json(rows);
  } catch (e) {
    next(e);
  }
});

//get Diner account location
router.get("/location", async (req, res, next) => {
  try {
    const rows = await Diner.getLocation();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get Diner by ID with location
router.get("/:id", async (req, res, next) => {
  try {
    const rows = await Diner.getDinerwLocation(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Delete Diner account by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const rows = await Diner.remove(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Post Diner account location
router.post("/location", async (req, res, next) => {
  try {
    const rows = await Diner.postLocation(req.body);
    res.status(201).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get Diner account location by ID
router.get("/:id/location", async (req, res, next) => {
  try {
    const rows = await Diner.getByIDlocation(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Update diner account location
router.put("/:id/location", async (req, res, next) => {
  try {
    const rows = await Diner.editLocation(req.params.id, req.body);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
