const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const postModel = require("./src/model/postModel");

const post = express.Router();

post.use(bodyParser.urlencoded());
post.use(cors());

post.get("/", (req, res) => {
    res.redirect("/user/login");
});

post.get("/create", (req, res) => {
    res.render("posts/create");
});

post.post("/create", (req, res) => {
    var date = new Date();

    var postData = {
        username: "smhjifri",
        image: "p1.jpg",
        heading: req.body.heading,
        text: req.body.text,
        date: date,
        category: req.body.category,
        comments: "03"
    };

    var postData = new postModel(postData);
    postData.save().catch((err) => {
        console.log(err);
    });

    res.redirect("/user/dashboard");
});

post.get("/edit/:p_id", (req, res) => {
    postModel.findOne({
            _id: req.params.p_id
        })
        .then((data) => {
            res.render("posts/edit", {
                data
            });
        });
});

post.post("/edit", (req, res) => {
    var editedData = {
        heading: req.body.heading,
        text: req.body.text,
        category: req.body.category
    };
    postModel.updateMany({
            _id: req.body.p_id
        }, {
            $set: editedData
        })
        .catch((err) => {
            console.log("an error occured" + err);
        });
    res.redirect("/user/dashboard");
});

post.get("/delete/:p_id", (req, res) => {
    postModel.deleteOne({_id: req.params.p_id})
    .catch((err)=>{
        console.log("An error occured while deleting "+err);
    });
    res.redirect("/user/dashboard");

});

post.get("/details", (req, res) => {
    res.render("posts/blog-details");
});

module.exports = post;