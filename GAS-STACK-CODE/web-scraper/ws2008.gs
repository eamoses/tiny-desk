function december2008() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=12-31-2008";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("December 2008 done");
  november2008();
}

function november2008() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=11-30-2008";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("November 2008 done");
  october2008();
}

function october2008() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=10-31-2008";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("October 2008 done");
  september2008()
}

function september2008() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=9-30-2008";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("September 2008 done");
  august2008();
}

function august2008() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=8-31-2008";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("August 2008 done")
  july2008();
}

function july2008() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=7-31-2008";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("July 2008 done");
  june2008();
}

function june2008() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2008";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("June 2008 done")
  may2008();
}

function may2008() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2008";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("May 2008 done");
  april2008();
}

function april2008() {
  url = "https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2008";
  let sheet = SpreadsheetApp.getActive().getSheetByName("npr");
  let lastRow = sheet.getLastRow() + 1;
  sheet.getRange(lastRow, 1).setValue(`=IMPORTXML("${url}", "//article//@datetime | //article//@src | //article//@href | //article//h2 | //article//p")`);
  Logger.log("April 2008 done");
  march2008();
}

// https://www.npr.org/series/tiny-desk-concerts/archive?date=12-31-2008
// https://www.npr.org/series/tiny-desk-concerts/archive?date=11-30-2008
// https://www.npr.org/series/tiny-desk-concerts/archive?date=10-31-2008
// https://www.npr.org/series/tiny-desk-concerts/archive?date=9-30-2008
// https://www.npr.org/series/tiny-desk-concerts/archive?date=8-31-2008
// https://www.npr.org/series/tiny-desk-concerts/archive?date=7-31-2008
// https://www.npr.org/series/tiny-desk-concerts/archive?date=6-30-2008
// https://www.npr.org/series/tiny-desk-concerts/archive?date=5-31-2008
// https://www.npr.org/series/tiny-desk-concerts/archive?date=4-30-2008
