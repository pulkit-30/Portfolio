const route = require("express").Router();
const DB_Contact = require("../db/Message");

route.get("/", (req, res) => {
  res.render("contact", { title: "Contact Pulkit" });
});
route.post("/newContact", (req, res) => {
  DB_Contact.newConatct(req.body, res);
});

module.exports = route;
