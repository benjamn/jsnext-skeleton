"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sleep = sleep;

var _packageJson = require("../package.json");

Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function get() {
    return _packageJson.version;
  }
});

function sleep(ms) {
  return _regeneratorRuntime.async(function sleep$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(new _Promise(function (resolve) {
          return setTimeout(resolve, ms);
        }));

      case 2:
        return context$1$0.abrupt("return", ms);

      case 3:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
}