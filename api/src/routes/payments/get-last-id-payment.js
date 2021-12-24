const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");

/**
 * [GET]
 * Route to get last payment id
 * @returns {Object} returns object with id of last payment
 */
router.get("/", async (req, res) => {
  try {
    console.log("in last payment");
    const payments = await knex("payments").orderBy("id", "desc");
    const lastId = payments[0].id;
    res.status(200).send({ lastId: lastId });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
