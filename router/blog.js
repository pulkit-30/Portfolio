require('dotenv').config();
const route = require('express').Router();

route.get('/', (req, res) => {
    res.redirect('https://p-blogs.hashnode.dev');
});

module.exports = route;
