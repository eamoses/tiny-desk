function triggerTweetPost() {
  let data = getData();
  let n = numberPicker(data);
  let authorize = authorizeAccount();
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

function numberPicker(data) {
  let random = Math.floor((Math.random() * data.length) + 0);
  return random;
}

// USE THIS TO FIND SPECIFIC ARTISTS
//   let data = getData();
//   for (n = 0; n < data.length; n++) {
//    if(data[n].artist == 'Artists Name) {
//      console.log(n) // To get index of artist
//    }
//   }
  // postTweet({
  //   service: authorize.service,
  //   params: authorize.params,
  //   tweet: '#tinydesk #nprmusic #newmusic #artistsname'
  //           + '\n'
  //           + data[1017].artist // Hard code the index
  //           // + '\n'
  //           // + data[1017].description
  //           + '\n'
  //           + data[1017].link,
  //   sheetToUpdateID: 830299951,
  //   newRowAt: 2
  // })

// USE THIS IF YOU WANT TO USE THE BUTTON ON THE GOOGLE SHEET
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
