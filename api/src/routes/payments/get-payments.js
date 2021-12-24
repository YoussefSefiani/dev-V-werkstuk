const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");

/**
 * [GET]
 * Route to get all the payments from database
 * @returns {Array[Object]} returns array of all the payments
 */

router.get("/", async (req, res) => {
  console.log("in payments");
  try {
    const payments = await knex.select().from("payments");
    payments.length ? res.status(200).send(payments) : "No payments found";
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
