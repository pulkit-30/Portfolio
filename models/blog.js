const Mongoose = require('mongoose');

const BlogSchema = new Mongoose.Schema(
  {
    title: String,
    Article: Array,
    caption: String,
    link: String,
    image: String,
  },
  {
    timestamps: true,
  }
);
module.exports = Mongoose.model('blog', BlogSchema);
