const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");
const { checkIfNumber } = require("../../functions/functions");

router.get("/", async (req, res) => {
  try {
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
