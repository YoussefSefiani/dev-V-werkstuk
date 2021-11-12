const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");
const { checkInfluencerObject } = require("../../functions/functions");


/**
 * [POST]
 * Route to add an influencer to database
 * @param {String} first_name
 * @param {String} last_name
 * @param {String} birth_date
 * @param {String} email
 * @param {String} description
 * @param {String} iban
 * @returns {int} returns status 200 if correctly added into db
 *
 */

router.post("/", async (req, res) => {
  try {
    const influencer = checkInfluencerObject(req.body);
    if (influencer) {
      await knex("influencers").insert(influencer);
      res.sendStatus(200);
    }
    console.log(`influencer ${influencer.first_name} in db`);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
