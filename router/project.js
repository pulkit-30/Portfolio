const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("projects", { title: "Pulkit projects" });
});

module.exports = route;
