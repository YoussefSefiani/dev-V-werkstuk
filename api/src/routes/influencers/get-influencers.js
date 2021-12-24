const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");

/**
 * [GET]
 * Route to get all the influencers from database
 * @returns {Array[Object]} returns array of all the influencers
 */

router.get("/", async (req, res) => {
  console.log("in influencers route");
  try {
    const influencers = await knex.select().from("influencers");
    influencers.length
      ? res.status(200).send(influencers)
      : "No influencers found";
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
