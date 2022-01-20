const route = require("express").Router();
const DB_Contact = require("../db/Message");
const userVerification = require("../utils/userVerification");

route.get("/", (req, res) => {
  res.render("contact", { title: "Contact Pulkit" });
});
route.post("/newContact", (req, res) => {
  DB_Contact.newConatct(req.body, res);
});
route.get("/allContacts/:Password", userVerification, async (req, res) => {
  try {
    await DB_Contact.AllContacts(res);
  } catch (err) {
    res.status(500).redirect("/failure");
  }
});
module.exports = route;
