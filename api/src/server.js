require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const pg = require("pg");
const { createTables, deleteTables } = require("./db/db");
const getInfluencers = require("./routes/influencers/get-influencers");
const getInfluencer = require("./routes/influencers/get-influencer");
const addInfluencer = require("./routes/influencers/add-influencer");
const editInfluencer = require("./routes/influencers/edit-influencer");
const deleteInfluencer = require("./routes/influencers/delete-influencer");
const getLastIdInfluencer = require("./routes/influencers/get-last-id-influencer");
const getPayments = require("./routes/payments/get-payments");
const getPayment = require("./routes/payments/get-payment");
const deletePayment = require("./routes/payments/delete-payment");
const addPayment = require("./routes/payments/add-payment");
const editPayment = require("./routes/payments/edit-payment");
const getLastPayment = require("./routes/payments/get-last-id-payment");
const getBrands = require("./routes/brands/get-brands");

app.use("/last-influencer", getLastIdInfluencer);
app.use("/influencers", getInfluencers);
app.use("/influencers", getInfluencer);
app.use("/influencers", addInfluencer);
app.use("/influencers", editInfluencer);
app.use("/influencers", deleteInfluencer);
app.use("/payments", getPayments);
app.use("/payments", getPayment);
app.use("/payments", deletePayment);
app.use("/payments", addPayment);
app.use("/payments", editPayment);
app.use("/last-payment", getLastPayment);
app.use("/brands", getBrands);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
    //deleteTables();
    createTables();
  });
}

app.get("/", (req, res) => {
  res.send("hellooooo");
});

module.exports = app;
