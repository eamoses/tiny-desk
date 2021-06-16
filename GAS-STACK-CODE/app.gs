function triggerTweetPost() {
  let data = getData();
  let n = numberPicker(data);
  if (true) {
    const authorize = authorizeAccount();
    postTweet({
      service: authorize.service,
      params: authorize.params,
      tweet: '#tinydesk #npr #nprmusic #tinydeskconcert #newmusic'
              + '\n'
              + data[n].artist
              + '\n'
              + data[n].description
              + '\n'
              + data[n].link,
      sheetToUpdateID: 830299951,
      newRowAt: 2
    })
  }
}

function numberPicker(data) {
  let random = Math.floor((Math.random() * data.length) + 0);
  return random;
}

// function postTweetButton() {
//   SpreadsheetApp.getUi().alert("POST Tweet");
//   let data = getData();
//   let n = numberPicker(data);
//   if (true) {
//     const authorize = authorizeAccount();
//     postTweet({
//       service: authorize.service,
//       params: authorize.params,
//       tweet: '#tinydesk #npr #nprmusic #tinydeskconcert #newmusic'
//               + '\n'
//               + data[n].artist
//               + '\n'
//               + data[n].description
//               + '\n'
//               + data[n].link,
//       sheetToUpdateID: 830299951,
//       newRowAt: 2
//     })
//   }
// }
