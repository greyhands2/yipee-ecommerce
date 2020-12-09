"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCurrentUser = void 0;

var _user = require("./user.types");

var setCurrentUser = function setCurrentUser(user) {
  return {
    type: _user.userActionTypes.SET_CURRENT_USER,
    payload: user
  };
};

exports.setCurrentUser = setCurrentUser;