const Mongoose = require('mongoose');

const ProjectSchema = new Mongoose.Schema(
  {
    Title: String,
    Image: String,
    link: String,
    description: String,
    caption: String,
    codeUrl: String,
  },
  {
    timestamps: true,
  }
);
module.exports = Mongoose.model('project', ProjectSchema);
