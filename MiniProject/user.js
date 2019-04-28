const express = require("express");
const bodyParser = require("body-parser");
const newUserSchema = require("./src/model/userModel");
const newPostSchema = require("./src/model/postModel")

var user = express.Router();

user.use(bodyParser.urlencoded());

var userData = "";

user.get("/", (req, res) => {
    res.redirect("/user/login");
});

user.get("/login", (req, res) => {
    if (userData == "") {
        res.render("users/login");
    } else {
        res.redirect("/user/dashboard")
    }
});

user.post("/login", (req, res) => {
    var user = req.body.username;
    var pass = req.body.password;

    newUserSchema.findOne({
            username: user
        })
        .then((auth) => {
            console.log("in callback function");
            if (auth) {
                if (pass == auth.password) {
                    newPostSchema.find({
                            username: auth.username
                        })
                        .then((posts) => {
                            console.log("in posts callback function");
                            userData = {
                                auth,
                                posts
                            };
                        });
                    res.redirect("/user/dashboard");
                } else {
                    res.send("username or password not match");
                }
            } else {
                res.send("username or password not match");
            }
        });

});

user.get("/create", (req, res) => {
    res.render("under-construction");
});

user.get("/dashboard", (req, res) => {
    if (userData == "") {
        res.redirect("/user/login");
    } else {
        res.render("users/dashboard", {
            userData
        })
    }
})


module.exports = user;