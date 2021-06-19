function postTweet({ service, params, tweet, replyId, sheetToUpdateID, newRowAt, tweetLength }) {

  if (service) {

    if (replyId == 0 || replyId == null || replyId == "") {
      console.log("No reply ID provided.");
    } else {
      console.log("In response to: " + replyId)
      params.in_reply_to_status_id = replyId;
      params.auto_populate_reply_metadata = true;
    }

    try {
      var response = service.sendTweet(tweet, params)
      if (response) {
        if (sheetToUpdateID) {
          updateTweetLog(response, tweet, sheetToUpdateID, replyId, newRowAt, tweetLength)
        }
        console.log(response)
      } else {
        console.log("No Response");
      }
    } catch (e) {
      console.log("Error: " + e);
    }

  } else { Logger.log("something wrong with service") }
}

function updateTweetLog(response, tweet, sheetToUpdateID, replyId, newRowAt, tweetLength) {
  const ss = getSheetById(sheetToUpdateID);
  ss.insertRowBefore(newRowAt);
  const newRowRange = ss.getRange(newRowAt+":"+newRowAt);
  const newRow = newRowRange.getValues();
  const currentdate = new Date();
  let datetime = "Last Sync: "
                + (currentdate.getMonth()+1)
                + "/"
                + currentdate.getDate()
                + "/"
                + currentdate.getFullYear()
                + " @ "
                + currentdate.getHours()
                + ":"
                + currentdate.getMinutes()
                + ":"
                + currentdate.getSeconds();
  const newRowValues =
  [ // WARNING! Order is specific!
    ( replyId ? "ReTweet" : "Tweet"),
      response.user.screen_name,
      datetime,
      tweetLength,
      tweet, // Hashtags coming from cell B4
      '=hyperlink("https://twitter.com/'+response.user.screen_name+'/status/'+response.id_str+'")',
      response.id_str,
      response.user.id_str,
      replyId || "-",
      (response.in_reply_to_status_id ?
      '=hyperlink("https://twitter.com/'+response.in_reply_to_screen_name+'/status/'+replyId+'")' : "-"
    )
  ]
  newRowValues.forEach((value,index)=>{
    newRow[0][index] = value
  })
  newRowRange.setValues(newRow)
}
