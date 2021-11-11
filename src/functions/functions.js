function checkIfNumber(number) {
  return !isNaN(parseInt(number)) ? parseInt(number) : false;
}

function capitalizeFirstLetter(string) {
  return string && typeof string === "string"
    ? string.toString().charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    : false;
}

function checkIfDate(date) {
  const pattern = /(^(((0[1-9]|1[0-9]|2[0-8])[/](0[1-9]|1[012]))|((29|30|31)[/](0[13578]|1[02]))|((29|30)[/](0[4,6,9]|11)))[/](19|[2-9][0-9])\d\d$)|(^29[/]02[/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;

  return date && pattern.test(date) ? date : false;
}

function checkIfEmail(email) {
  const pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return email && pattern.test(email) ? email : false;
}

function countStringLength(string) {
  return string && string.length <= 200 && typeof string === "string"
    ? string
    : false;
}

function checkIfIBAN(IBAN) {
  const pattern = /[A-Z]{2}[0-9]{2}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$/;
  return IBAN && pattern.test(IBAN) ? IBAN : false;
}

module.exports = {
  checkIfNumber: checkIfNumber,
  capitalizeFirstLetter: capitalizeFirstLetter,
  checkIfDate: checkIfDate,
  checkIfEmail: checkIfEmail,
  countStringLength: countStringLength,
  checkIfIBAN: checkIfIBAN,
};
