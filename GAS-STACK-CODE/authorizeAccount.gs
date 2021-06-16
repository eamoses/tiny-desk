function authorizeAccount() {

  const screen_name = getSheetById(0).getRange("B1").getValue()
  const accounts = getSheetById(1493879578).getDataRange().getValues().slice(1)
  let account = accounts[0]
  const twitterKeys = {
    TWITTER_ID: screen_name, // GAS use only.
    TWITTER_CONSUMER_KEY: account[5],
    TWITTER_CONSUMER_SECRET: account[6],
    TWITTER_ACCESS_TOKEN: account[7],
    TWITTER_ACCESS_SECRET: account[8]
  }

  const props = PropertiesService.getScriptProperties()
  props.setProperties(twitterKeys)

  var params = new Array(0)
  const service = new Twitter.OAuth(props)

  if (!service.hasAccess()) {
    console.log("Authorization Failed")
    return false
  } else {
    console.log("Success Authorizating")
    return { 
      service: service,
      params: params
    }
  }

}
