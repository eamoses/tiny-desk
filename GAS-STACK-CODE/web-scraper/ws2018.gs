function december2018() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=12-31-2018";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("December 2018 done");
  november2018();
}

function november2018() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=11-30-2018";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("November 2018 done");
  october2018();
}

function october2018() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=10-31-2018";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("October 2018 done");
  september2018()
}

function september2018() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=9-30-2018";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("September 2018 done");
  august2018();
}

function august2018() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=8-31-2018";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("August 2018 done")
  july2018();
}

function july2018() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=7-31-2018";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("July 2018 done");
  june2018();
}

function june2018() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2018";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("June 2018 done")
  may2018();
}

function may2018() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2018";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("May 2018 done");
  april2018();
}

function april2018() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2018";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("April 2018 done");
  march2018();
}

function march2018() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=3-31-2018";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("March 2018 done");
  february2018();
}

function february2018() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=2-28-2018";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("February 2018 done");
  january2018();
}

function january2018() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=1-31-2018";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("January 2018 done");
}

// https://www.npr.org/series/tiny-desk-concerts/archive?date=12-31-2018
// https://www.npr.org/series/tiny-desk-concerts/archive?date=11-30-2018
// https://www.npr.org/series/tiny-desk-concerts/archive?date=10-31-2018
// https://www.npr.org/series/tiny-desk-concerts/archive?date=9-30-2018
// https://www.npr.org/series/tiny-desk-concerts/archive?date=8-31-2018
// https://www.npr.org/series/tiny-desk-concerts/archive?date=7-31-2018
// https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2018
// https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2018
// https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2018
// https://www.npr.org/series/tiny-desk-concerts/archive?date=3-31-2018
// https://www.npr.org/series/tiny-desk-concerts/archive?date=2-28-2018
// https://www.npr.org/series/tiny-desk-concerts/archive?date=1-31-2018
