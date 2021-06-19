function june2021() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2021";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("June 2021 done");
  may2021();
}

function may2021() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2021";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("May 2021 done")
  april2021();
}

function april2021() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2021";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("April 2021 done");
  march2021();
}

function march2021() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=3-31-2021";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("March 2021 done");
  february2021();
}

function february2021() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=2-28-2021";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("February 2021 done");
  january2021();
}

function january2021() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=1-31-2021";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("January 2021 done");
}

// https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2021
// https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2021
// https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2021
// https://www.npr.org/series/tiny-desk-concerts/archive?date=3-31-2021
// https://www.npr.org/series/tiny-desk-concerts/archive?date=2-28-2021
// https://www.npr.org/series/tiny-desk-concerts/archive?date=1-31-2021
