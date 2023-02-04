const route = require('express').Router();

route.get('/', (req, res) => {
  try {
    res.render('index', { title: 'About Pulkit Gupta' });
  } catch (error) {
    res.send('Sorry Something went wrong!!');
  }
});

module.exports = route;
