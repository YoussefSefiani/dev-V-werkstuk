const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");
const { checkIfNumber } = require("../../functions/functions");

/**
 * [GET]
 * Route to get an influencer from database
 * @param {int} id id of influencer to get
 * @returns {Array} returns the influencer if correctly selected from db
 *
 */

router.get("/:id", async (req, res) => {
  const id = checkIfNumber(req.params.id);
  try {
    if (id) {
      const influencer = await knex
        .select()
        .from("influencers")
        .where("id", id);
      res.send(
        influencer.length
          ? influencer
          : `influencer with id ${id} does not exist`
      );
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
