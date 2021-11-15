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
  let { checkedInfluencer, openFields } = checkInfluencerObject(req.body);
  try {
    if (!openFields.length) {
      await knex("influencers").insert(checkedInfluencer);
      res
        .status(200)
        .send(
          `influencer ${checkedInfluencer.first_name} ${checkedInfluencer.last_name} in db`
        );
      console.log();
      return;
    }
    throw error;
  } catch (error) {
    if (openFields.length) {
      console.log("there are openfields");
      let errors = "";
      openFields.forEach((error, index) => {
        openFields.length - 1 === index
          ? (errors += `${error}.`)
          : (errors += `${error}, `);
      });
      res.status(401).send({
        message: `Could not add influencer to db. Missing fields: ${errors}`,
      });
      return;
    }
    res.send(error);
  }
});

module.exports = router;
