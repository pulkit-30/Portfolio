const route = require("express").Router();

route.get("/", (req, res) => {
  res.redirect("/resume.pdf");
});

module.exports = route;
