require('dotenv').config();
const route = require('express').Router();
route.get('/', (req, res) => {
    res.render('blog', { title: 'Blogs'});
});
route.get('/post/:param', (req, res) => {
  res.render('blog-post', { title: 'BlogPost - '+ req.params.param.split('.')[0], source:req.params.param});
});

module.exports = route;
