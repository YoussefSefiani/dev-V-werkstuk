const paymentsData = require("../data/data-payments");
const { knex } = require("../db/db");

//////////////////////////////////////// PAYMENTS FUNCTIONS ////////////////////////////////////////

function createTable() {
  knex.schema.hasTable("payments").then(function (exists) {
    if (!exists) {
      knex.schema
        .createTable("payments", (table) => {
          table.increments("id");
          table.integer("amount");
          table
            .bigInteger("influencer_id")
            .index()
            .references("id")
            .inTable("influencers")
            .onDelete("CASCADE");

          table
            .bigInteger("brand_id")
            .index()
            .references("id")
            .inTable("fake_brands")
            .onDelete("CASCADE");
        })
        .then(() => {
          return knex("payments").insert(paymentsData);
        });
    }
  });
}

async function deleteTable() {
  knex.schema.hasTable("payments").then(function (exists) {
    if (exists) {
      knex.schema.dropTable("payments").then(() => {
        console.log("payments deleted");
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
