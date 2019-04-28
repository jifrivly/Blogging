const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blogDB")
    .then(() => {
        console.log("Database connection successful");
    })
    .catch(err => {
        console.error("Database connection error");
    });

const newUserSchema = new mongoose.Schema({
    name:String,
    image:String,
    username: String,
    password: String,
});

// var userSchema = mongoose.model("userSchema",newUserSchema);
// module.exports = userSchema;

module.exports = mongoose.model("user", newUserSchema);

// module.exports = mongoose.model("userSchema",{username:{type:String,unique:true},password:String})