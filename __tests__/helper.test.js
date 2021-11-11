const {
  checkIfNumber,
  capitalizeFirstLetter,
  checkIfDate,
  checkIfEmail,
  countStringLength,
  checkIfIBAN,
} = require("../src/functions/functions");

test("function to check if input is a number", () => {
  expect(checkIfNumber()).toBeFalsy();
  expect(checkIfNumber("")).toBeFalsy();
  expect(checkIfNumber(null)).toBeFalsy();
  expect(checkIfNumber(undefined)).toBeFalsy();
  expect(checkIfNumber(false)).toBeFalsy();
  expect(checkIfNumber(true)).toBeFalsy();

  expect(checkIfNumber("test")).toBeFalsy();
  expect(checkIfNumber("a1az")).toBeFalsy();
  expect(checkIfNumber("1aaz")).toBeTruthy();
  expect(typeof checkIfNumber("1aaz")).toMatch("number");

  expect(checkIfNumber("1")).toBe(1);
  expect(checkIfNumber("1")).toBeTruthy();

  expect(checkIfNumber(1)).toBeTruthy();
  expect(checkIfNumber(1)).toBe(1);
});

test("function to capitalize first letter of first and last name", () => {
  expect(capitalizeFirstLetter("")).toBeFalsy();
  expect(capitalizeFirstLetter(null)).toBeFalsy();
  expect(capitalizeFirstLetter(undefined)).toBeFalsy();
  expect(capitalizeFirstLetter(false)).toBeFalsy();
  expect(capitalizeFirstLetter(true)).toBeFalsy();
  expect(capitalizeFirstLetter(1)).toBeFalsy();

  expect(capitalizeFirstLetter("youssef")).toMatch("Youssef");
  expect(capitalizeFirstLetter("YOUSSEF")).toMatch("Youssef");
  expect(capitalizeFirstLetter("yOUSSEF")).toMatch("Youssef");
  expect(capitalizeFirstLetter("youssef")).toBeTruthy();

  expect(typeof capitalizeFirstLetter("Youssef")).toMatch("string");
});

test("function to check if input is valid birthdate in dd/mm/yyyy", () => {
  expect(checkIfDate("")).toBeFalsy();
  expect(checkIfDate(null)).toBeFalsy();
  expect(checkIfDate(undefined)).toBeFalsy();
  expect(checkIfDate(false)).toBeFalsy();
  expect(checkIfDate(true)).toBeFalsy();
  expect(checkIfDate(1)).toBeFalsy();

  expect(checkIfDate(Date.now())).toBeFalsy();
  expect(checkIfDate("01012021")).toBeFalsy();
  expect(checkIfDate("01.01.2021")).toBeFalsy();
  expect(checkIfDate("01-01-2021")).toBeFalsy();
  expect(checkIfDate("/01/01/2021/")).toBeFalsy();
  expect(checkIfDate("01//01//2021")).toBeFalsy();
  expect(checkIfDate("37/13/2021")).toBeFalsy();
  expect(checkIfDate("08/15/2021")).toBeFalsy();
  expect(checkIfDate("43/08/2021")).toBeFalsy();

  expect(checkIfDate("02/01/2020")).toBeTruthy();
  expect(checkIfDate("28/09/1967")).toBeTruthy();
});

test("function to check if input is valid email", () => {
  expect(checkIfEmail("")).toBeFalsy();
  expect(checkIfEmail(null)).toBeFalsy();
  expect(checkIfEmail(undefined)).toBeFalsy();
  expect(checkIfEmail(false)).toBeFalsy();
  expect(checkIfEmail(true)).toBeFalsy();
  expect(checkIfEmail(1)).toBeFalsy();

  expect(checkIfEmail("youssef.hotmail.com")).toBeFalsy();
  expect(checkIfEmail("youssef@hotmail")).toBeFalsy();
  expect(checkIfEmail("@hotmail.com")).toBeFalsy();

  expect(checkIfEmail("youssef@hotmail.com")).toBeTruthy();

  expect(typeof checkIfEmail("youssef@hotmail.com")).toMatch("string");
});

test("function to check if description is string and less than 200 characters", () => {
  expect(countStringLength("")).toBeFalsy();
  expect(countStringLength(null)).toBeFalsy();
  expect(countStringLength(undefined)).toBeFalsy();
  expect(countStringLength(false)).toBeFalsy();
  expect(countStringLength(true)).toBeFalsy();
  expect(countStringLength(1)).toBeFalsy();

  expect(
    countStringLength(
      "Hello this is a description Hello this is a description Hello this is a description"
    )
  ).toBeTruthy();

  expect(
    countStringLength(
      "Hello this is a description Hello this is a description Hello this is a description Hello this is a description Hello this is a description Hello this is a description Hello this is a description Hello this is a description"
    )
  ).toBeFalsy();

  expect(
    typeof countStringLength(
      "Hello this is a description Hello this is a description Hello this is a description"
    )
  ).toMatch("string");
});

test("function to check if input is IBAN number", () => {
  expect(checkIfIBAN("")).toBeFalsy();
  expect(checkIfIBAN(null)).toBeFalsy();
  expect(checkIfIBAN(undefined)).toBeFalsy();
  expect(checkIfIBAN(false)).toBeFalsy();
  expect(checkIfIBAN(true)).toBeFalsy();
  expect(checkIfIBAN(1)).toBeFalsy();

  expect(checkIfIBAN("0012 3456 7891 0111 2131")).toBeFalsy();
  expect(checkIfIBAN("BE12 3456 7891 0111 2131")).toBeFalsy();
  //// /////
  expect(checkIfIBAN("BE93 3630 2751 1967")).toBeTruthy();
  expect(checkIfIBAN("FR93 3630 2751 1967")).toBeTruthy();
  expect(typeof checkIfIBAN("BE12 3456 7891 0111")).toMatch("string");
});
