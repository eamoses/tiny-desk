function december2020() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=12-31-2020";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("December 2020 done");
  november2020();
}

function november2020() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=11-30-2020";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("November 2020 done");
  october2020();
}

function october2020() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=10-31-2020";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("October 2020 done");
  september2020()
}

function september2020() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=9-30-2020";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("September 2020 done");
  august2020();
}

function august2020() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=8-31-2020";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("August 2020 done")
  july2020();
}

function july2020() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=7-31-2020";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("July 2020 done");
  june2020();
}

function june2020() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2020";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("June 2020 done")
  may2020();
}

function may2020() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2020";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("May 2020 done");
  april2020();
}

function april2020() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2020";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("April 2020 done");
  march2020();
}

function march2020() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=3-31-2020";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("March 2020 done");
  february2020();
}

function february2020() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=2-29-2020";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("February 2020 done");
  january2020();
}

function january2020() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=1-31-2020";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("January 2020 done");
}

// https://www.npr.org/series/tiny-desk-concerts/archive?date=12-31-2020
// https://www.npr.org/series/tiny-desk-concerts/archive?date=11-30-2020
// https://www.npr.org/series/tiny-desk-concerts/archive?date=10-31-2020
// https://www.npr.org/series/tiny-desk-concerts/archive?date=9-30-2020
// https://www.npr.org/series/tiny-desk-concerts/archive?date=8-31-2020
// https://www.npr.org/series/tiny-desk-concerts/archive?date=7-31-2020
// https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2020
// https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2020
// https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2020
// https://www.npr.org/series/tiny-desk-concerts/archive?date=3-31-2020
// https://www.npr.org/series/tiny-desk-concerts/archive?date=2-29-2020
// https://www.npr.org/series/tiny-desk-concerts/archive?date=1-31-2020
