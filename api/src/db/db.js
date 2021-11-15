require("dotenv").config();
console.log(process.env.PG_CONNECTION_STRING);
const knex = require("knex")({
  client: "pg",
  version: "9.6",
  searchPath: ["knex", "public"],
  connection:
    process.env.NODE_ENV === "test"
      ? process.env.PG_CONNECTION_STRINGLOCAL
      : process.env.PG_CONNECTION_STRINGPG,
});

module.exports = {
  knex: knex,
};
