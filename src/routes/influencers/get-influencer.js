const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");
const { checkIfNumber } = require("../../functions/functions");

router.get("/:id", async (req, res) => {
  const id = checkIfNumber(req.params.id);
  try {
    res.send(await knex.select().from("influencers").where("id", id));
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
