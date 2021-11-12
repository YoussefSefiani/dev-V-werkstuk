const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");
const {
  checkInfluencerObject,
  checkIfNumber,
} = require("../../functions/functions");

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
