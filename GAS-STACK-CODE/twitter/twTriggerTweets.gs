function triggerTweetPost() {
  let data = getData();
  let n = numberPicker(data);
  let authorize = authorizeAccount();
  let tinyDeskDate = data[n].description.substring(9, data[n].description.indexOf('•'));
  let tweetLength = data[n].artist.length 
                  + data[n].description.length 
                  + 23; // Link length is 23 characters no matter what
  let shortTweetLength = data[n].artist.length
                  + tinyDeskDate.length
                  + 23;
  if(tweetLength >= 280) {
    postTweet({
      service: authorize.service,
      params: authorize.params,
      tweet: data[n].artist
              + '\n' 
              + tinyDeskDate
              + '\n' 
              + data[n].link,
      sheetToUpdateID: 830299951,
      newRowAt: 2,
      tweetLength: tweetLength
    })
  } else if (shortTweetLength >= 280){
    postTweet({
      service: authorize.service,
      params: authorize.params,
      tweet: data[n].artist 
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
      tweet: data[n].artist
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
