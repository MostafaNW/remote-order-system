var express = require('express');
var router = express.Router();
// pools will use environment variables
// for connection information
//database
const dotenv = require("dotenv").config(); //credentials for database
const { Pool, Client } = require('pg')
const pool = new Pool()
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
  console.log(req.params.id);
});

module.exports = router;