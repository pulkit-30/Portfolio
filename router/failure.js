const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("failure");
});

module.exports = route;
