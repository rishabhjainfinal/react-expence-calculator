"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = swDev;

function swDev() {
  var swurl = "".concat(process.env.PUBLIC_URL, "/sw.js");

  if ('serviceWorker' in navigator) {
    // Only call navigator.serviceWorker.register() if that's true.
    navigator.serviceWorker.register(swurl).then(function (response) {
      // console.warn('response',response)
      console.log(1);
    });
  }
}