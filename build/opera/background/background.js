var e={name:"Opera",slug:"opera",scriptVariableMap:{BROWSER:"chrome",MESSENGER:"extension"},manifestMap:{"background.persistent":!1,incognito:"not_allowed",offline_enabled:!1,version_name:"0.1.1",version:"0.1.1"},version:"0.1.1"},n="chrome",r="firefox",t="edge",o="safari",i="https://dissenter.com/discussion/begin-extension?url=",a=function(e){return!l(e)&&!c(e)&&(null!==e&&"object"==typeof e)},s=function(e){return"string"==typeof e||e instanceof String},c=function(e){return!s(e)&&!l(e)&&null!=e&&null!=e&&(e&&"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e))},l=function(e){return Array.isArray(e)};chrome.browserAction.onClicked.addListener(function(){chrome.tabs.create({url:"index.html"})});