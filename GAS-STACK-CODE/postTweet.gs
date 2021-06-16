function postTweet({ service, params, tweet, replyId, sheetToUpdateID, newRowAt }) {

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
          updateTweetLog(response, tweet, sheetToUpdateID, replyId, newRowAt)
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

function updateTweetLog(response, tweet, sheetToUpdateID, replyId, newRowAt) {
  const ss = getSheetById(sheetToUpdateID)
  ss.insertRowBefore(newRowAt)
  const newRowRange = ss.getRange(newRowAt+":"+newRowAt)
  const newRow = newRowRange.getValues()
  const newRowValues =
  [ // Order is specific!
    ( replyId ? "ReTweet" : "Tweet"),
      response.user.screen_name,
      response.created_at,
      tweet,
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
