function december2012() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=12-31-2012";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("December 2012 done");
  november2012();
}

function november2012() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=11-30-2012";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("November 2012 done");
  october2012();
}

function october2012() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=10-31-2012";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("October 2012 done");
  september2012()
}

function september2012() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=9-30-2012";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("September 2012 done");
  august2012();
}

function august2012() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=8-31-2012";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("August 2012 done")
  july2012();
}

function july2012() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=7-31-2012";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("July 2012 done");
  june2012();
}

function june2012() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2012";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("June 2012 done")
  may2012();
}

function may2012() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2012";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("May 2012 done");
  april2012();
}

function april2012() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2012";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("April 2012 done");
  march2012();
}

function march2012() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=3-31-2012";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("March 2012 done");
  february2012();
}

function february2012() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=2-29-2012";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("February 2012 done");
  january2012();
}

function january2012() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=1-31-2012";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("January 2012 done");
}

// https://www.npr.org/series/tiny-desk-concerts/archive?date=12-31-2012
// https://www.npr.org/series/tiny-desk-concerts/archive?date=11-30-2012
// https://www.npr.org/series/tiny-desk-concerts/archive?date=10-31-2012
// https://www.npr.org/series/tiny-desk-concerts/archive?date=9-30-2012
// https://www.npr.org/series/tiny-desk-concerts/archive?date=8-31-2012
// https://www.npr.org/series/tiny-desk-concerts/archive?date=7-31-2012
// https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2012
// https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2012
// https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2012
// https://www.npr.org/series/tiny-desk-concerts/archive?date=3-31-2012
// https://www.npr.org/series/tiny-desk-concerts/archive?date=2-29-2012
// https://www.npr.org/series/tiny-desk-concerts/archive?date=1-31-2012
