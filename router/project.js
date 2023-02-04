const route = require("express").Router();
route.get("/", (req, res) => {
res.redirect('https://github.com/pulkit-30')
});
module.exports = route;
