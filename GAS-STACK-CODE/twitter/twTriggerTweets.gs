function triggerTweetPost() {
  let data = getData();
  let n = numberPicker(data);
  let authorize = authorizeAccount();
  let tweetLength = data[n].artist.length
                  + data[n].description.length
                  + data[n].link.length
                  + 19; // hardcoded hashtags length
  if(tweetLength >= 280) {
    postTweet({
      service: authorize.service,
      params: authorize.params,
      tweet: '#tinydesk #nprmusic'
              + '\n'
              + data[n].artist
              + '\n'
              + data[n].link,
      sheetToUpdateID: 830299951,
      newRowAt: 2,
      tweetLength: tweetLength
    })
  } else {
    postTweet({
      service: authorize.service,
      params: authorize.params,
      tweet: '#tinydesk #nprmusic'
              + '\n'
              + data[n].artist
              + '\n'
              + data[n].description
              + '\n'
              + data[n].link,
      sheetToUpdateID: 830299951,
      newRowAt: 2,
      tweetLength: tweetLength
    })
  }
}

function numberPicker(data) {
  let random = Math.floor((Math.random() * data.length) + 0);
  return random;
}
