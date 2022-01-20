const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("index", { title: "About Pulkit Gupta" });
});

module.exports = route;
