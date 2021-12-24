const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");

/**
 * [GET]
 * Route to get all the influencers from database
 * @returns {Array[Object]} returns array of all the influencers
 */

router.get("/", async (req, res) => {
  console.log("in brand route");
  try {
    const brands = await knex.select().from("fake_brands");
    brands.length ? res.status(200).send(brands) : "No brands found";
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
