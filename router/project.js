const route = require("express").Router();
const ProjectModel =require('../models/project')
route.get("/", (req, res) => {
try{
  ProjectModel.find({},(error,data)=>{
    if(error) throw new Error('Something went wrong!!')
    res.render("projects", { title: "Pulkit projects",projects:data });
  })
}catch(err){
  res.send('something went wrong!!!')
}
});

module.exports = route;
