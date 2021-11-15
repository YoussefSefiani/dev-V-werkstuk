const { knex } = require("../db/db");

// HELPER FUNCTIONS //
/**
 * Check if a given "number" is of type int
 * @param {int} number number to check
 * @returns {int} returns the number is it is int of type "int"
 * @returns {boolean} returns false if is not a number
 */
function checkIfNumber(number) {
  return !isNaN(parseInt(number)) ? parseInt(number) : false;
}

/**
 * Capitalizes the first letter of a given string
 * @param {String} string to capitalize
 * @returns {String} returns the given string with first letter capitalized
 * @returns {boolean} returns false if incorrect parameter
 */
function capitalizeFirstLetter(string) {
  return string && typeof string === "string"
    ? string.toString().charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    : false;
}

/**
 * Check if given string is dd/mm/yyyy date format
 * @param {String} date
 * @returns {String} returns the given date if it's correct format
 * @returns {boolean} returns false if incorrect parameter
 */

function checkIfDate(date) {
  const pattern = /(^(((0[1-9]|1[0-9]|2[0-8])[/](0[1-9]|1[012]))|((29|30|31)[/](0[13578]|1[02]))|((29|30)[/](0[4,6,9]|11)))[/](19|[2-9][0-9])\d\d$)|(^29[/]02[/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;

  return date && pattern.test(date) ? date : false;
}

/**
 * Check if given string is email
 * @param {String} email
 * @returns {String} returns the given mail if it's correct format
 * @returns {boolean} returns false if incorrect parameter
 */

function checkIfEmail(email) {
  const pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return email && pattern.test(email) ? email : false;
}

/**
 * Counts the length of given string
 * @param {String} string
 * @returns {String} returns the given string if it's correct format
 * @returns {boolean} returns false if incorrect parameter
 */

function countStringLength(string) {
  return string && string.length <= 200 && typeof string === "string"
    ? string
    : false;
}

/**
 * Check if given string is IBAN
 * @param {String} IBAN
 * @returns {String} returns the given IBAN if it's correct format
 * @returns {boolean} returns false if incorrect parameter
 */

function checkIfIBAN(IBAN) {
  const pattern = /[A-Z]{2}[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$/;
  return IBAN && pattern.test(IBAN) ? IBAN : false;
}

/**
 * checks if required fields are sent
 * @param {String} first_name
 * @param {String} last_name
 * @param {String} birth_date
 * @param {String} email
 * @param {String} description
 * @param {String} iban
 * @returns {Object} returns the given Object if it successfully checked everything
 *
 */

function checkInfluencerObject(influencer) {
  let openFields = [];

  const {
    first_name,
    last_name,
    birth_date,
    email,
    description,
    iban,
  } = influencer;

  let checkedInfluencer = {
    first_name: capitalizeFirstLetter(first_name),
    last_name: capitalizeFirstLetter(last_name),
    birth_date: checkIfDate(birth_date),
    email: checkIfEmail(email),
    description: countStringLength(description),
    iban: checkIfIBAN(iban),
  };

  for (const key in checkedInfluencer) {
    console.log(key);
    console.log(checkedInfluencer[key]);

    if (!checkedInfluencer[key] && key !== "description" && key !== "iban") {
      openFields.push(key);
      console.log(`field ${key} is not filled`, openFields);
    }
  }
  console.log("influencer checked correctly");
  return {
    checkedInfluencer: checkedInfluencer,
    openFields: openFields,
  };
}

// DATABASE FUNCTIONS //

const dummyData = {
  first_name: "Youssef",
  last_name: "Sefiani",
  birth_date: "02/04/2000",
  email: "Youssef.sefiani@student.ehb.be",
  description: "Hello I am Youssef",
  iban: "BE12 3456 7891 0111",
};

function createTable() {
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
      return knex("influencers").insert(dummyData);
    });
}

function deleteTable() {
  knex.schema.hasTable("influencers").then(function (exists) {
    if (!exists) {
      knex.schema.dropTable("influencers");
    }
    console.log("here not deleted");
  });
}

module.exports = {
  checkIfNumber: checkIfNumber,
  capitalizeFirstLetter: capitalizeFirstLetter,
  checkIfDate: checkIfDate,
  checkIfEmail: checkIfEmail,
  countStringLength: countStringLength,
  checkIfIBAN: checkIfIBAN,
  createTable: createTable,
  deleteTable: deleteTable,
  checkInfluencerObject: checkInfluencerObject,
};
