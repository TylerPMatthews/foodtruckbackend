const express = require("express");
const Menu = require("./Menu-Model");
const router = express.Router();

//get all menu
router.get("/", async (req, res, next) => {
  try {
    const rows = await Menu.getAll();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Post new menu
router.post("/", async (req, res, next) => {
  try {
    const rows = await Menu.post(req.body);
    res.status(201).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get menu by ID
router.get("/:id", async (req, res, next) => {
  try {
    const rows = await Menu.getByID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Edit menu by ID
router.put("/:id", async (req, res, next) => {
  try {
    const rows = await Menu.edit(req.params.id, req.body);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Delete a menu by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const rows = await Menu.remove(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
