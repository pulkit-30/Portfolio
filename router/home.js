const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("index",{title:"About Pulkit"});
});

module.exports = route;
