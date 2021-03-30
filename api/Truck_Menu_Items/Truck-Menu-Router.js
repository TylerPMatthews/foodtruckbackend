const express = require("express");
const TMR = require("./Truck-Menu-Model");
const router = express.Router();

//get all
router.get("/", async (req, res, next) => {
  try {
    const rows = await TMR.getAll();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Post new
router.post("/", async (req, res, next) => {
  try {
    const rows = await TMR.post(req.body);
    res.status(201).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get by ID
router.get("/:id", async (req, res, next) => {
  try {
    const rows = await TMR.getByID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Edit by ID
router.put("/:id", async (req, res, next) => {
  try {
    const rows = await TMR.edit(req.params.id, req.body);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Delete by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const rows = await TMR.remove(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
