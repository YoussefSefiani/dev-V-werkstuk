const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");

router.get("/", async (req, res) => {
  try {
    res.send(await knex.select().from("influencers"));
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
