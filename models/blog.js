const Mongoose = require("mongoose");

const BlogSchema = new Mongoose.Schema(
  {
    title: String,
    caption: String,
    image: String,
    labels:Array,
    date: String,
    time: String,
    article: Object,
    likes: {
      type:Number,default:0
    },
    comment: {
      type:Array,default:0
    },
    views: {
      type:Number,default:0
    },
    readTime: {type:String,default:0},
  },
  {
    timestamps: true,
  }
);
module.exports = Mongoose.model("blog", BlogSchema);
