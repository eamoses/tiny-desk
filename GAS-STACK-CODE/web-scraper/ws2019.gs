function december2019() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=12-31-2019";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("December 2019 done");
  november2019();
}

function november2019() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=11-30-2019";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("November 2019 done");
  october2019();
}

function october2019() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=10-31-2019";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("October 2019 done");
  september2019()
}

function september2019() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=9-30-2019";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("September 2019 done");
  august2019();
}

function august2019() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=8-31-2019";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("August 2019 done")
  july2019();
}

function july2019() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=7-31-2019";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("July 2019 done");
  june2019();
}

function june2019() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2019";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("June 2019 done")
  may2019();
}

function may2019() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2019";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("May 2019 done");
  april2019();
}

function april2019() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2019";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("April 2019 done");
  march2019();
}

function march2019() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=3-31-2019";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("March 2019 done");
  february2019();
}

function february2019() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=2-28-2019";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("February 2019 done");
  january2019();
}

function january2019() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=1-31-2019";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("January 2019 done");
}

// https://www.npr.org/series/tiny-desk-concerts/archive?date=12-31-2019
// https://www.npr.org/series/tiny-desk-concerts/archive?date=11-30-2019
// https://www.npr.org/series/tiny-desk-concerts/archive?date=10-31-2019
// https://www.npr.org/series/tiny-desk-concerts/archive?date=9-30-2019
// https://www.npr.org/series/tiny-desk-concerts/archive?date=8-31-2019
// https://www.npr.org/series/tiny-desk-concerts/archive?date=7-31-2019
// https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2019
// https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2019
// https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2019
// https://www.npr.org/series/tiny-desk-concerts/archive?date=3-31-2019
// https://www.npr.org/series/tiny-desk-concerts/archive?date=2-28-2019
// https://www.npr.org/series/tiny-desk-concerts/archive?date=1-31-2019
