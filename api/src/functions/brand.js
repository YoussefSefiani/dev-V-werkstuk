const brandsData = require("../data/data-brand");
const { knex } = require("../db/db");

//////////////////////////////////////// FAKE DATA BRANDS ////////////////////////////////////////

function createTable() {
  knex.schema.hasTable("fake_brands").then(function (exists) {
    if (!exists) {
      knex.schema
        .createTable("fake_brands", (table) => {
          table.increments();
          table.string("name");
        })
        .then(() => {
          console.log("dummy brands created");
          return knex("fake_brands").insert(brandsData);
        });
    }
  });
}

async function deleteTable() {
  knex.schema.hasTable("fake_brands").then(function (exists) {
    if (exists) {
      knex.schema.dropTable("fake_brands").then(() => {
        console.log("fake brands deleted");
      });
      return;
    }
    console.log("here not deleted");
  });
}

module.exports = {
  createTable: createTable,
  deleteTable: deleteTable,
};
