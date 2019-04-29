const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blogDB")
    .then(() => {
        console.log("Database connection successful");
    })
    .catch(err => {
        console.error("Database connection error");
    });

const newPostSchema = new mongoose.Schema({
    username :String,
    image: String,
    heading: String,
    text: String,
    date: String,
    category: String,
    comments: String,
});

module.exports = mongoose.model("post", newPostSchema);



// postModel.insertMany([
//     {"username":"smhjifri","image": "p1.jpg","heading": "It's Hurricane Season But We Are Visiting Hilton Island","text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.","date": "Mon Apr 29 2019 09:48:18 GMT+0530 (India Standard Time)","category": "Food & Travel","comments": "03"},
//     {"username":"smhjifri","image": "p2.jpg","heading": "Global Resorts Network Grn Putting Timeshares To Shame","text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nemo inventore ducimus dolorum sequi dolorem vel, voluptatem corrupti. Modi ratione facilis aliquid ipsam veniam officia iusto corporis voluptates possimus natus.","date": "Mon Apr 29 2019 09:48:18 GMT+0530 (India Standard Time)","category": "Food & Travel","comments": "04" },    
//     {"username":"smhjifri","image": "p3.jpg","heading": "A Guide To Rocky Mountain Vacations","text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.","date": "Mon Apr 29 2019 09:48:18 GMT+0530 (India Standard Time)","category": "Food & Travel","comments": "06" },
//     {"username":"smhjifri","image": "p4.jpg","heading": "Big Savings On Gas While You Travel","text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.","date": "Mon Apr 29 2019 09:48:18 GMT+0530 (India Standard Time)","category": "Food & Travel","comments": "01" },
//     {"username":"smhjifri","image": "p5.jpg","heading": "Tourism Is Back In Full Swing In Cancun Mexico","text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.","date": "Mon Apr 29 2019 09:48:18 GMT+0530 (India Standard Time)","category": "Food & Travel","comments": "09"}
// ]);


