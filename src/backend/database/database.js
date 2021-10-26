const dotenv = require("dotenv").config(); //credentials for database
const { Pool, Client } = require("pg");
const pool = new Pool();

module.exports = {
  getItem: async (id) => {
    console.log("Retreiving menu items...");
    const query =
      "SELECT meal_item.id, meal_item.name, meal_item.price, meal_item.content\
       FROM restaurant.meal_item AS meal_item, restaurant.menu_item AS menu_item\
       WHERE meal_item.id=menu_item.meal_item_id AND menu_item.menu_id=$1";
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return { result: result.rows };
    } catch (error) {
      console.log(`Error keys: ${Object.keys(error)}`);
      return { error: error.code };
    }
  },

  getMenu: async (id) => {
    const query =
      "SELECT id, title, content FROM restaurant.menu AS menu WHERE menu.id = $1";
    const values = [id];
    const result = await pool.query(query, values);
    // console.log(result.rows);
    if (result.rows.length == 0) res.status(404).send("RESOURCE NOT FOUND");
    return { menu: result.rows[0] };
  },

  getMenus: async () => {
    const query = "SELECT id, title, content FROM restaurant.menu";
    try {
      const result = await pool.query(query);
      return { result: result.rows };
    } catch (err) {
      console.log(`Error keys: ${Object.keys(error)}`);
      return { error: error.code };
    }
  },
};
