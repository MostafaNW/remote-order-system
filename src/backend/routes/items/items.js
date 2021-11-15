const express = require("express");
// const handlers = require("./handlers.js");
const db = require("../../database/database");
const router = express.Router();

router.get("/:menu_id", async (req, res, next) => {
  try {
    const rows = await db.getItem(req.params.menu_id);
    // console.log(rows);
    if (!rows) next("500 SERVER ERROR");
    else if (rows.length > 0) return res.status(200).json(rows.result);
    else return res.status(404).json({ error: "Resource not found" });
  } catch (err) {
    console.log(`Error: ${err}`);
    next("500 SERVER ERROR");
  }
});

router.get("/", async (req, res, next) => {
  res.status(200).send("PLACE HOLDER");
});

module.exports = router;
