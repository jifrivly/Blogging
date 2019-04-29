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

function getPost(username = {}) {
    userModel.find(username, (err, data) => {
        if (err) {
            console.log("An error occured " + err);
        } else {
            users = data;
        };
        console.log("Data : " + users);
    });

    postModel.find(username, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            posts = data;
        };
        console.log("Data : " + posts);
    });

    for (let i = 0; i < posts.length; i++) {
        var name, userImage;
        for (let j = 0; j < users.length; j++) {
            if (posts[i].username == users[j].username) {
                name = users[j].name;
                userImage = users[j].image;
                break;
            };
        };
        posts[i] = {
            post: posts[i],
            user: {
                name,
                userImage
            }
        };
    };
    console.log("Integrated Data : " + posts);
    return posts;
};



my_app.get("/", (req, res) => {
    var posts = getPost();

    // res.send(posts);

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

my_app.get("/:b_id", (req, res) => {
    var b_id = req.params.b_id;
    posts = getPost({
        username: b_id
    });

    // res.send(posts);

    if (posts.length > 0) {
        res.render("blogger", {
            posts,
        });
    } else {
        res.send("User not found");
    };

});


my_app.listen(process.env.PORT || 4545, () => {
    console.log(chalk.blue("My app is listening to port : ") + chalk.red("4545"));
});