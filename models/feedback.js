const Mongoose = require('mongoose');

const feedbackSchema = new Mongoose.Schema(
  {
    blog: String,
    message: String,
  },
  {
    timestamps: true,
  }
);
module.exports = Mongoose.model('feedback', feedbackSchema);
