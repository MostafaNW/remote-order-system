var express = require("express");
var router = express.Router();
// pools will use environment variables
// for connection information
//database
const dotenv = require("dotenv").config(); //credentials for database
const { Pool, Client } = require("pg");
const pool = new Pool();
router.get("/", async (req, res, next) => {
  console.log(req.params.id);
  const query = "SELECT title FROM restaurant.menu";
  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json({ message: "Error" });
  }
});

router.get("/:id", async (req, res, next) => {
  const query =
    "SELECT id, title, content FROM restaurant.menu AS menu WHERE menu.id = $1";
  const values = [req.params.id];
  try {
    const result = await pool.query(query, values);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json({ message: "Error" });
  }
});

module.exports = router;
