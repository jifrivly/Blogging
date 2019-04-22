const express = require("express")
const bodyParser = require("body-parser")

var blog = express.Router()

blog.use(bodyParser.urlencoded())

blog.get("/", (req, res) => {
    res.render("under-construction")
})

blog.get("/details", (req, res) => {
    res.render("blog-details")
})

blog.get("/login", (req, res) => {
    res.render("login")
})

blog.post("/login",(req,res)=>{
    var user = req.body.username
    var pass = req.body.password
    if (user == "" | pass == "") {
        res.send("fields must not be null")
    } else if (user == "jifrivly" && pass == "123456") {
        res.send(user + "is Successfully logged in")
    } else {
        res.send("username or password not match")
    }
})

blog.get("/create", (req, res) => {
    res.render("under-construction")
})


module.exports = blog