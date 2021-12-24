const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");
const {
  checkPaymentObject,
  checkIfNumber,
} = require("../../functions/helpers");

/**
 * [PUT]
 * Route to edit an influencer in database
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
    const body = checkPaymentObject(req.body);
    console.log(body);
    const id = checkIfNumber(req.params.id);
    if (body.checkedPayment) {
      console.log("indddedit");
      await knex("payments").where("id", id).update(body.checkedPayment);
      res.status(200).send({ message: `payment with id ${id} changed` });
      console.log("done ext");
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
