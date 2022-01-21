const route = require("express").Router();

route.get("/", (req, res) => {
  res.redirect("/Resume.pdf");
});

module.exports = route;
