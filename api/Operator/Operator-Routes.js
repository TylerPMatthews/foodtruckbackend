const express = require("express");
const Operator = require("./Operator-Model");
const router = express.Router();

//Get all Operator accounts
router.get("/", async (req, res, next) => {
  try {
    const rows = await Operator.getAll();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//get Operator by ID
router.get("/:id", async (req, res, next) => {
  try {
    const rows = await Operator.getByID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Post a new operator
router.post("/", async (req, res, next) => {
  try {
    const rows = await Operator.post(req.body);
    res.status(201).json(rows);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
