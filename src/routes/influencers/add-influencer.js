const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");
const { checkInfluencerObject } = require("../../functions/functions");

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
