const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");
const { checkIfNumber } = require("../../functions/functions");

router.delete("/:id", async (req, res) => {
  const id = checkIfNumber(req.params.id);
  try {
    if (id) {
      await knex("influencers").where("id", id).del();
      res.sendStatus(200);
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
