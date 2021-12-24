const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");
const { checkPaymentObject } = require("../../functions/helpers");

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
  let { checkedPayment } = checkPaymentObject(req.body);
  try {
    if (checkedPayment) {
      let insertedPayment = await knex("payments")
        .insert(checkedPayment)
        .returning("*");
      console.log(insertedPayment);
      res.status(200).send({
        message: `payment in db`,
      });
      return;
    }
    throw error;
  } catch (error) {
    res.status(404).send(error.detail);
  }
});

module.exports = router;
