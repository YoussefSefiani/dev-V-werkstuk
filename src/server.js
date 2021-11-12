require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const pg = require("pg");
const { knex } = require("./db/db");
const { createTable, deleteTable } = require("./functions/functions");
const getInfluencers = require("./routes/influencers/get-influencers");
const getInfluencer = require("./routes/influencers/get-influencer");
const addInfluencer = require("./routes/influencers/add-influencer");

app.use("/influencers", getInfluencers);
app.use("/influencers", getInfluencer);
app.use("/influencers", addInfluencer);

/* deleteTable();
createTable(); */

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
