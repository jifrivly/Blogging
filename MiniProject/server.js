const express = require("express");
const chalk = require("chalk");
const expressEjsLayouts = require("express-ejs-layouts");
const path = require("path");

const postModel = require("./src/model/postModel");
const userModel = require("./src/model/userModel");

const adminRouter = require("./admin");
const userRouter = require("./user");
const postRouter = require("./post");

my_app = express();

my_app.set("view engine", "ejs");
my_app.set("views", "./src/views");

my_app.use(expressEjsLayouts);
my_app.use(express.static(path.join(__dirname, "public")));
my_app.use("/admin", adminRouter);
my_app.use("/user", userRouter);
my_app.use("/post", postRouter);


var users = [];
var posts = [];

function getPost(username=null) {
    userModel.find({username}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            users = data;
        };
    });

    postModel.find({username}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            posts = data;
        };
    });

    for (let i = 0; i < posts.length; i++) {
        var name, userImage;
        for (let j = 0; j < users.length; j++) {
            if (posts[i].username == users[j].username) {
                name = users[j].name;
                userImage = users[j].image;
                break;
            }
        }
        posts[i] = {
            post: posts[i],
            user: {
                name,
                userImage
            }
        };
    };
    return posts;
};





// var posts = [
//     {"username":"smhjifri","image": "p1.jpg","heading": "It's Hurricane Season But We Are Visiting Hilton Island","text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.","date": "Mon Apr 29 2019 09:48:18 GMT+0530 (India Standard Time)","category": "Food & Travel","comments": "03"},
//     {"username":"smhjifri","image": "p2.jpg","heading": "Global Resorts Network Grn Putting Timeshares To Shame","text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nemo inventore ducimus dolorum sequi dolorem vel, voluptatem corrupti. Modi ratione facilis aliquid ipsam veniam officia iusto corporis voluptates possimus natus.","date": "Mon Apr 29 2019 09:48:18 GMT+0530 (India Standard Time)","category": "Food & Travel","comments": "04" },    
//     {"username":"smhjifri","image": "p3.jpg","heading": "A Guide To Rocky Mountain Vacations","text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.","date": "Mon Apr 29 2019 09:48:18 GMT+0530 (India Standard Time)","category": "Food & Travel","comments": "06" },
//     {"username":"smhjifri","image": "p4.jpg","heading": "Big Savings On Gas While You Travel","text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.","date": "Mon Apr 29 2019 09:48:18 GMT+0530 (India Standard Time)","category": "Food & Travel","comments": "01" },
//     {"username":"smhjifri","image": "p5.jpg","heading": "Tourism Is Back In Full Swing In Cancun Mexico","text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.","date": "Mon Apr 29 2019 09:48:18 GMT+0530 (India Standard Time)","category": "Food & Travel","comments": "09"}
// ];

my_app.get("/", (req, res) => {
    var posts = getPost("jifrivly");

    res.render("home", {
        posts
    });
});

my_app.get("/category", (req, res) => {
    res.render("category");
});

my_app.get("/contact", (req, res) => {
    res.render("contact");
});

// my_app.get("/:b_id", (req, res) => {
//     var b_id = req.params.b_id;

//     res.render("blogger", {
//         posts,
//     });
// });


my_app.listen(process.env.PORT || 4545, () => {
    console.log(chalk.blue("My app is listening to port : ") + chalk.red("4545"));
});