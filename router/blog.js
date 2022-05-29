require('dotenv').config();
const route = require('express').Router();
const blogModel = require('../models/blog');
route.get('/', (req, res) => {
  try {
    blogModel.find({}, (error, blogs) => {
      if (error) throw new Error('Something went wrong!!!');
      res.render('blog', { title: 'Blogs', blogs: blogs });
    });
  } catch (error) {
    res.redirect('/failure');
  }
});

route.get('/post/:id', (req, res) => {
  try {
    blogModel.findOne({ _id: req.params.id }, (error, blog) => {
      if (error) throw new Error('Something went wrong!!!');
      res.render('blog-post', {
        title: 'BlogPost | ' + blog.title,
        blog: blog,
      });
    });
  } catch (error) {
    res.redirect('/failure');
  }
});

module.exports = route;
