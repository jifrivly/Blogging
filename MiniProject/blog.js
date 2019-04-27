const express = require("express");
const bodyParser = require("body-parser");
const newUserSchema = require("./src/model/userModel");

var blog = express.Router();

blog.use(bodyParser.urlencoded());

blog.get("/", (req, res) => {
    res.redirect("/blog/login");
});

blog.get("/details", (req, res) => {
    res.render("blog-details");
});

blog.get("/login", (req, res) => {
    res.render("login");
});

blog.post("/login", (req, res) => {
    var user = req.body.username;
    var pass = req.body.password;

    newUserSchema.findOne({
            username: user
        })
        .then((auth) => {
            console.log("in callback function");
            if (auth) {
                if (pass == auth.password) {
                    res.send(auth.username + " is Successfully logged in");
                } else {
                    res.send("username or password not match");
                }
            } else {
                res.send("username or password not match");
            }
        });

});

blog.get("/create", (req, res) => {
    res.render("under-construction");
});


module.exports = blog;