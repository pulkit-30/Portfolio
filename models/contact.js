const Mongoose = require("mongoose");

const ContactSchema = new Mongoose.Schema(
  {
    Name: String,
    Email: String,
    Message: String,
  },
  {
    timestamps: true,
  }
);
module.exports = Mongoose.model("contact", ContactSchema);
