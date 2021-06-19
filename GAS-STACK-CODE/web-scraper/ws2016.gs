function december2016() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=12-31-2016";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("December 2016 done");
  november2016();
}

function november2016() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=11-30-2016";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("November 2020 done");
  october2016();
}

function october2016() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=10-31-2016";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("October 2016 done");
  september2016()
}

function september2016() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=9-30-2016";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("September 2016 done");
  august2016();
}

function august2016() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=8-31-2016";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("August 2016 done")
  july2016();
}

function july2016() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=7-31-2016";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("July 2016 done");
  june2016();
}

function june2016() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2016";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("June 2016 done")
  may2016();
}

function may2016() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2016";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("May 2016 done");
  april2016();
}

function april2016() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2016";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("April 2016 done");
  march2016();
}

function march2016() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=3-31-2016";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("March 2016 done");
  february2016();
}

function february2016() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=2-29-2016";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("February 2016 done");
  january2016();
}

function january2016() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=1-31-2016";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("January 2016 done");
}

// https://www.npr.org/series/tiny-desk-concerts/archive?date=12-31-2016
// https://www.npr.org/series/tiny-desk-concerts/archive?date=11-30-2016
// https://www.npr.org/series/tiny-desk-concerts/archive?date=10-31-2016
// https://www.npr.org/series/tiny-desk-concerts/archive?date=9-30-2016
// https://www.npr.org/series/tiny-desk-concerts/archive?date=8-31-2016
// https://www.npr.org/series/tiny-desk-concerts/archive?date=7-31-2016
// https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2016
// https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2016
// https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2016
// https://www.npr.org/series/tiny-desk-concerts/archive?date=3-31-2016
// https://www.npr.org/series/tiny-desk-concerts/archive?date=2-29-2016
// https://www.npr.org/series/tiny-desk-concerts/archive?date=1-31-2016
