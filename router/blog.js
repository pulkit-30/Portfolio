require("dotenv").config();
const route = require("express").Router();
const blog = require("../models/blog");
route.get("/", (req, res) => {
  blog.find({}, (error, data) => {
    if (error) {
      res.redirect("/failure");
    }
    res.render("blog", { title: data.title, blogData: data });
  });
});
route.get("/:id", (req, res) => {
  try {
    blog.findById({ _id: req.params.id }, (error, data) => {
      if (error) {
        res.redirect("/failure");
      }
      res.render("blog-post", { title: "Pulkit's Blog", blogData: data });
    });
  } catch (error) {
    console.log(error);
    res.redirect("/failure");
  }
});
route.get("/write", (req, res) => {
    res.render("blog-write", { title: write});
});
route.post("/write", (req, res) => {
  try {
    const date = new Date();
    req.body.date = date.toLocaleDateString();
    req.body.time = date.toLocaleTimeString();
    const len =
      req.body.para1.trim()?.split(" ").length +
      req.body.para2.trim()?.split(" ").length +
      req.body.para3.trim()?.split(" ");
    req.body.readTime = JSON.stringify(len / 255);
    req.body.article = {
      0: req.body.para1,
      1: req.body.para2,
      2: req.body.para3,
    };
    req.body.labels = req.body.labels.split(" ");

    if (req.body.password === "Pulkit@30") {
      const newBlog = new blog(req.body);
      newBlog.save();
      res.redirect("/blog");
    } else {
      res.redirect("/failure");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
