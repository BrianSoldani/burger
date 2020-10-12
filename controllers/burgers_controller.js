const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  burger.all(function (data) {
    res.render("index", {
      burger_name: data
    });
  });
});

router.post("/burgers/create", function (req, res) {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, false], function (result) {
    console.log(result)
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {
  let condition = "id=" + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function (result) {
      if (result.changeRows === true) {
        return res.status(500).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;