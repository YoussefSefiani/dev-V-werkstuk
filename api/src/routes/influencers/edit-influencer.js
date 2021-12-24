const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");
const {
  checkInfluencerObject,
  checkIfNumber,
} = require("../../functions/helpers");

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
    const body = checkInfluencerObject(req.body);
    console.log(body);
    const id = checkIfNumber(req.params.id);
    if (body.checkedInfluencer) {
      console.log("in edit");
      await knex("influencers")
        .where("id", id)
        .update(body.checkedInfluencer)
        .then((response) => {
          console.log(response);
        });
      res.status(200).send({ message: `influencer with id ${id} changed` });
    }
    console.log(`influencer ${body.checkedInfluencer.first_name} in db`);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
