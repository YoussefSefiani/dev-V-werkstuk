const { knex } = require("../db/db");
const influencersData = require("../data/data-influencer");

//////////////////////////////////////// INFLUENCER FUNCTIONS ////////////////////////////////////////

function createTable() {
  knex.schema.hasTable("influencers").then(function (exists) {
    if (!exists) {
      knex.schema
        .createTable("influencers", (table) => {
          table.increments("id");
          table.string("first_name");
          table.string("last_name");
          table.string("birth_date");
          table.string("email");
          table.string("description").nullable();
          table.string("iban").nullable();
        })
        .then(() => {
          return knex("influencers").insert(influencersData);
        });
    }
  });
}

async function deleteTable() {
  knex.schema.hasTable("influencers").then(function (exists) {
    if (exists) {
      knex.schema.dropTable("influencers").then(() => {
        console.log("influencers deleted");
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
