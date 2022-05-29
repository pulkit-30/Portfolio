const mongoose = require("mongoose");
async function main() {
  await mongoose.connect('mongodb://admin:password@localhost:27017');
}
module.exports = main;
