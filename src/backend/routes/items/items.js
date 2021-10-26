const express = require("express");
// const handlers = require("./handlers.js");
const db = require('../../database/database');
const router = express.Router();
 
router.get("/:menu_id", async (req, res) => {
  const rows = await db.getItem(req.params.menu_id);
  // console.log(rows);
  if (rows.error) res.status(500).json({ error: "Server error" });
  else if (rows.result.length > 0) res.status(200).json(rows.result);
  else res.status(404).json({ error: "Resource not found" });
});

router.get("/", async (req, res, next) => {
  res.status(200).send("PLACE HOLDER");
});

module.exports = router;
