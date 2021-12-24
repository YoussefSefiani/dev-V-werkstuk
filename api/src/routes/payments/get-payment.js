const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");
const { checkIfNumber } = require("../../functions/helpers");

/**
 * [GET]
 * Route to get an payment from database
 * @param {int} id id of payment to get
 * @returns {Array} returns the payment if correctly selected from db
 *
 */

router.get("/:id", async (req, res) => {
  const id = checkIfNumber(req.params.id);
  try {
    if (id) {
      const payment = await knex.select().from("payments").where("id", id);
      res.send(
        payment.length ? payment : `payment with id ${id} does not exist`
      );
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
