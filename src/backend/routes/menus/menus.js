const express = require("express");
const router = express.Router();

// pools will use environment variables
// for connection information
//database
const dotenv = require("dotenv").config(); //credentials for database
const db = require("../../database/database");
router.get("/", async (req, res, next) => {
  try {
    const result = await db.getMenus();
    return res.status(200).json(result.result);
  } catch (err) {
    console.log(`Error: ${err}`);
    next("500 SERVER ERROR");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const result = await db.getMenu(req.params.id);
    // console.log(`result: ${JSON.stringify(result)}`);
    if (!result) {
      return res
        .status(200)
        .json({ message: `menu with id: ${req.params.id} doesn't exist` });
    }
    return res.status(200).json(result);
  } catch (err) {
    next("500 SERVER ERROR");
  }
});

module.exports = router;
