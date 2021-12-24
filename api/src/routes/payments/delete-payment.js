const express = require("express");
const router = express.Router();
const { knex } = require("../../db/db");
const { checkIfNumber } = require("../../functions/helpers");

/**
 * [DELETE]
 * Route to delete an influencer from database
 * @param {int} id id of influencer to delete
 * @returns {int} returns status 200 if correctly deleted from db
 *
 */

router.delete("/:id", async (req, res) => {
  const id = checkIfNumber(req.params.id);
  try {
    if (id) {
      await knex("payments")
        .where("id", id)
        .del()
        .then((response) => {
          if (response) {
            res.status(200).send({ message: `payment with id ${id} deleted.` });
            return;
          }
          res
            .status(404)
            .send({ message: `payment with id ${id} does not exist.` });
        });
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
