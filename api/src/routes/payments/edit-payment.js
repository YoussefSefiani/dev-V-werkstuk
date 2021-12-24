const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");
const {
  checkPaymentObject,
  checkIfNumber,
} = require("../../functions/helpers");

/**
 * [PUT]
 * Route to edit an payment in database
 * @param {String} influencer_id
 * @param {String} brand_id
 * @param {String} amount
 * @returns {int} returns status 200 if correctly edited on db
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
