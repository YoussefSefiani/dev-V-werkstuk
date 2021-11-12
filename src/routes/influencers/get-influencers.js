const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");

/**
 * [GET]
 * Route to get all the influencers from database
 * @returns {Array[Object]} returns array of all the influencers
 */

router.get("/", async (req, res) => {
  try {
    res.send(await knex.select().from("influencers"));
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
