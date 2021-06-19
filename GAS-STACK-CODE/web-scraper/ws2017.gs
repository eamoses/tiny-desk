function december2017() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=12-31-2017";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("December 2017 done");
  november2017();
}

function november2017() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=11-30-2017";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("November 2017 done");
  october2017();
}

function october2017() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=10-31-2017";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("October 2017 done");
  september2017()
}

function september2017() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=9-30-2017";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("September 2017 done");
  august2017();
}

function august2017() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=8-31-2017";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("August 2017 done")
  july2017();
}

function july2017() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=7-31-2017";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("July 2017 done");
  june2017();
}

function june2017() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2017";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("June 2017 done")
  may2017();
}

function may2017() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2017";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("May 2017 done");
  april2017();
}

function april2017() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2017";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("April 2017 done");
  march2017();
}

function march2017() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=3-31-2017";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("March 2017 done");
  february2017();
}

function february2017() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=2-28-2017";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("February 2017 done");
  january2017();
}

function january2017() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=1-31-2017";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("January 2017 done");
}

// https://www.npr.org/series/tiny-desk-concerts/archive?date=12-31-2017
// https://www.npr.org/series/tiny-desk-concerts/archive?date=11-30-2017
// https://www.npr.org/series/tiny-desk-concerts/archive?date=10-31-2017
// https://www.npr.org/series/tiny-desk-concerts/archive?date=9-30-2017
// https://www.npr.org/series/tiny-desk-concerts/archive?date=8-31-2017
// https://www.npr.org/series/tiny-desk-concerts/archive?date=7-31-2017
// https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2017
// https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2017
// https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2017
// https://www.npr.org/series/tiny-desk-concerts/archive?date=3-31-2017
// https://www.npr.org/series/tiny-desk-concerts/archive?date=2-28-2017
// https://www.npr.org/series/tiny-desk-concerts/archive?date=1-31-2017
