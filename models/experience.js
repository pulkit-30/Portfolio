const Mongoose = require('mongoose');

const ExpSchema = new Mongoose.Schema(
  {
    title: String,
    position: String,
    time: {
      start: String,
      end: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = Mongoose.model('experience', ExpSchema);
