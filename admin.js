const express = require("express");
const bodyParser = require("body-parser");

admin = express.Router();

admin.use(bodyParser.urlencoded());

admin.get("/", (req, res) => {
    res.render("login");
});
admin.post("/", (req, res) => {
    var user = req.body.admin
    var pass = req.body.pass
    if (user == "" | pass == "") {
        res.send("fields must not be null");
    } else if (user == "jifrivly" && pass == "12345") {
        res.send(user + "is Successfully logged in");
    } else {
        res.send("username or password not match");
    }
});

module.exports = admin