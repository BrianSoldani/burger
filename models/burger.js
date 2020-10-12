const orm = require("../config/orm.js");

const burger = {
  all: function (callback) {
    orm.all("burgers", function (res) {
      callback(res);
    });
  },
  create: function (cols, vals, callback) {
    orm.create("burgers", cols, vals, callback);
  },
  update: function (vals, condition, callback) {
    orm.update("burgers",
      { devoured: true }, condition,
      callback);
  }
};

module.exports = burger;