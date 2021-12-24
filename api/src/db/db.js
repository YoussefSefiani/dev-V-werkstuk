require("dotenv").config();

console.log(process.env.PG_CONNECTION_STRINGPG);

const knex = require("knex")({
  client: "pg",
  version: "9.6",
  searchPath: ["knex", "public"],
  connection: process.env.PG_CONNECTION_STRINGLOCAL,
  /*    process.env.NODE_ENV === "test"
      ? 
      : process.env.PG_CONNECTION_STRINGPG, */
});

module.exports = {
  knex: knex,
};

const influencer = require("../functions/influencer");
const payment = require("../functions/payment");
const brand = require("../functions/brand");

module.exports.createTables = function createTables() {
  influencer.createTable();
  brand.createTable();
  payment.createTable();
};

module.exports.deleteTables = async function deleteTables() {
  try {
    payment.deleteTable();
    influencer.deleteTable();
    brand.deleteTable();
  } catch (err) {
    console.log("db already empty");
  }
};
