const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");
const {
  checkInfluencerObject,
  checkIfNumber,
} = require("../../functions/functions");

/**
 * [PUT]
 * Route to edit an influencer from database
 * @param {String} first_name
 * @param {String} last_name
 * @param {String} birth_date
 * @param {String} email
 * @param {String} description
 * @param {String} iban
 * @returns {int} returns status 200 if correctly edited from db
 *
 */

router.put("/:id", async (req, res) => {
  try {
    const influencer = checkInfluencerObject(req.body);
    const id = checkIfNumber(req.params.id);
    if (influencer) {
      console.log("helloooooooo");
      await knex("influencers").whereRaw("id = ?", [id]).update(influencer);
      res.sendStatus(200);
    }
    console.log(`influencer ${influencer.first_name} in db`);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
