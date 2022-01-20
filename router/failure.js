const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("failure",{title:"Failed"});
});

module.exports = route;
