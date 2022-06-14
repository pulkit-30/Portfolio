require('dotenv').config();
const route = require('express').Router();
const blogModel = require('../models/blog');
const feedbackModel = require('../models/feedback');
const main = require('../utils/nodemailer');

route.get('/', (req, res) => {
  try {
    blogModel.find({}, (error, blogs) => {
      if (error) throw new Error('Something went wrong!!!');
      blogs = blogs.reverse();
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
      blog.time = blog.createdAt?.toLocaleTimeString();
      blog.date =
        blog.createdAt?.getDate() +
        '/' +
        blog.createdAt?.getMonth() +
        '/' +
        blog.createdAt.getFullYear();
      res.render('blog-post', {
        title: 'BlogPost | ' + blog.title,
        blog: blog,
      });
    });
  } catch (error) {
    res.redirect('/failure');
  }
});

route.post('/feedback', async (req, res) => {
  try {
    const blog = JSON.parse(req.body.blog);
    await main({
      to: process.env.USER_EMAIL,
      subject: 'Blog Feedback',
      text: `Hey Pulkit!, Got new feedback on ${blog.title}. Here is the Message ==> ${req.body.message}`,
      mail: req.body,
    });
    const newfeedback = await new feedbackModel(req.body);
    await newfeedback.save();
    res.status(200).redirect('/success');
  } catch (error) {
    console.log(error);
    res.redirect('/failure');
  }
});
module.exports = route;
