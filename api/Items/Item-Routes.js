const express = require("express");
const Item = require("./Item-Model");
const router = express.Router();

//get all Items
router.get("/", async (req, res, next) => {
  try {
    const rows = await Item.getAll();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Post new Item
router.post("/", async (req, res, next) => {
  try {
    const rows = await Item.post(req.body);
    res.status(201).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get Item by ID
router.get("/:id", async (req, res, next) => {
  try {
    const rows = await Item.getByID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Edit Item by ID
router.put("/:id", async (req, res, next) => {
  try {
    const rows = await Item.edit(req.params.id, req.body);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Delete a Item by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const rows = await Item.remove(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
