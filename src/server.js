require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const pg = require("pg");
const { knex } = require("./db/db");

app.get("/influencers", async (req, res) => {
  res.send(await knex.select().from("influencers"));
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
