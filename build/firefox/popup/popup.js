var t={name:"Mozilla Firefox",slug:"firefox",scriptVariableMap:{BROWSER:"browser",MESSENGER:"runtime"},manifestMap:{},version:"0.1.0"},e="chrome",n="firefox",i="edge",r="safari",o="https://dissenter.com/discussion/begin-extension?url=",u=function(e){return!s(e)&&!c(e)&&(null!==e&&"object"==typeof e)},a=function(e){return"string"==typeof e||e instanceof String},c=function(e){return!a(e)&&!s(e)&&null!=e&&null!=e&&(e&&"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e))},s=function(e){return Array.isArray(e)},f=function(){document.body,document.getElementById("popup");var i=document.getElementById("popup-iframe");function n(e,n){n,setTimeout(function(){var e=encodeURIComponent(n),t=o+e;i.setAttribute("src",t),i.classList.remove("hidden")},250)}this.init=function(){if(t.slug===r){var e=safari.application.activeBrowserWindow.activeTab;u(e)||(e={});e.title;n(0,e.url||"")}else browser.tabs.query({active:!0,currentWindow:!0},function(e){if(!e)return!1;var t=e[0]||{};t.title;n(0,t.url||"")})}};document.addEventListener("DOMContentLoaded",function(){(new f).init()});