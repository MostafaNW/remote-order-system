var express = require("express");
var router = express.Router();
// pools will use environment variables
// for connection information
//database
const dotenv = require("dotenv").config(); //credentials for database
const { Pool, Client } = require("pg");
const pool = new Pool();
router.get("/:menu_id", async (req, res, next) => {
  console.log("Retreiving menu items...");
  const query =
    "SELECT meal_item.name, meal_item.price, meal_item.content\
     FROM restaurant.meal_item AS meal_item, restaurant.menu_item AS menu_item\
     WHERE meal_item.id=menu_item.meal_item_id AND menu_item.menu_id=$1";
  const values = [req.params.menu_id];
  try {
    const result = await pool.query(query, values);
    res.status(200).json(result.rows);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json({ message: "Error" });
  }
});

router.get("/", async (req, res, next) => {
  res.status(200).send("PLACE HOLDER");
});

module.exports = router;
