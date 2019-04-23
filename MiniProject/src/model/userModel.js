const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blogging")
    .then(() => {
        console.log("Database connection successful");
    })
    .catch(err => {
        console.error("Database connection error");
    });

const newUserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
});

// var userSchema = mongoose.model("userSchema",newUserSchema);
// module.exports = userSchema;

module.exports = mongoose.model("userSchema", newUserSchema);

// module.exports = mongoose.model("userSchema",{username:{type:String,unique:true},password:String})