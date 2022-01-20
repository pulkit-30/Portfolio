const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("success");
});

module.exports = route;
