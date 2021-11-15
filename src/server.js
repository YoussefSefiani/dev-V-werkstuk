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
const editInfluencer = require("./routes/influencers/edit-influencer");
const deleteInfluencer = require("./routes/influencers/delete-influencer");

app.use("/influencers", getInfluencers);
app.use("/influencers", getInfluencer);
app.use("/influencers", addInfluencer);
app.use("/influencers", editInfluencer);
app.use("/influencers", deleteInfluencer);

/* deleteTable();
createTable(); */

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
}

module.exports = app;
