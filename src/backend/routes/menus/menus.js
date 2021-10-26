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
    if (result.error) {
      next({ status: 500, message: "server error" });
    }
    // if (result.result.length == 0)
    //   next({ status: 200, message: "Menu not found" });
    res.status(200).json(result.result);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json({ message: "Error" });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const result = await db.getMenu(req.params.id);
    if (!result.menu)
      next({
        status: 200,
        message: `menu with id: ${req.params.id} doesn't exist`,
      });
    res.status(200).json(result.menu);
  } catch (err) {
    next("test");
  }
});

module.exports = router;
