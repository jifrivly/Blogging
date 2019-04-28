const express = require("express");
const bodyParser = require("body-parser");

const post = express.Router();

post.use(bodyParser.urlencoded());

post.get("/",(req,res)=>{
    res.redirect("/user/login");
});

post.get("/create",(req,res)=>{
    res.render("posts/create");
});

post.post("/create",(req,res)=>{
    postData = {
        username:"smhjifri",
        image:"p1.jpg",
        heading:req.body.heading,
        text:req.body.text,
        date:"13th Oct, 2018",
        category:req.body.category,
        comments:"03"
    };
    res.send(postData);
});

post.get("/edit",(req,res)=>{

});

post.post("/edit",(req,res)=>{

});

post.get("/details", (req, res) => {
    res.render("posts/blog-details");
});

module.exports = post;