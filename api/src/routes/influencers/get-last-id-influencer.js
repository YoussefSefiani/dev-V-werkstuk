const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");

/**
 * [GET]
 * Route to get last influencer id
 * @returns {Object} returns object with id of last influencer
 */
router.get("/", async (req, res) => {
  try {
    const influencers = await knex("influencers").orderBy("id", "desc");
    const lastId = influencers[0].id;
    res.status(200).send({ lastId: lastId });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
