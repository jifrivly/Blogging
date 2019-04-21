const express = require("express")

var blog = express.Router()


blog.get("/", (req, res) => {
    res.render("under-construction")
})

blog.get("/details", (req, res) => {
    res.render("blog-details")
})

blog.get("/login", (req, res) => {
    res.render("login")
})

blog.get("/create", (req, res) => {
    res.render("under-construction")
})


module.exports = blog