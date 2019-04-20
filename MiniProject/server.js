const express = require("express")
const chalk = require("chalk")
const expressEjsLayouts = require("express-ejs-layouts")
const path = require("path")

const adminRouter = require("./admin")

my_app = express()

my_app.set("view engine", "ejs")
my_app.set("views", "./src/views")

my_app.use(expressEjsLayouts)
my_app.use(express.static(path.join(__dirname, "public")))
my_app.use("/admin", adminRouter)

var posts = [
    {
        "blogger": {
            "name": "Marvel Maison",
            "img": "a1.png"
        },
        "post": {
            "img": "p1.jpg",
            "heading": "It's Hurricane Season But We Are Visiting Hilton Island",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
            "date": "13th Oct, 2018",
            "category": "Food & Travel",
            "comments": "03"
        }
    },
    {
        "blogger": {
            "name": "Marvel Maison",
            "img": "a1.png"
        },
        "post": {
            "img": "p2.jpg",
            "heading": "Global Resorts Network Grn Putting Timeshares To Shame",
            "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nemo inventore ducimus dolorum sequi dolorem vel, voluptatem corrupti. Modi ratione facilis aliquid ipsam veniam officia iusto corporis voluptates possimus natus.",
            "date": "13th Oct, 2018",
            "category": "Food & Travel",
            "comments": "03"
        }
    },
    {
        "blogger": {
            "name": "Marvel Maison",
            "img": "a1.png"
        },
        "post": {
            "img": "p3.jpg",
            "heading": "A Guide To Rocky Mountain Vacations",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
            "date": "13th Oct, 2018",
            "category": "Food & Travel",
            "comments": "03"
        }
    },
    {
        "blogger": {
            "name": "Marvel Maison",
            "img": "a1.png"
        },
        "post": {
            "img": "p4.jpg",
            "heading": "Big Savings On Gas While You Travel",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
            "date": "13th Oct, 2018",
            "category": "Food & Travel",
            "comments": "03"
        }
    },
    {
        "blogger": {
            "name": "Marvel Maison",
            "img": "a1.png"
        },
        "post": {
            "img": "p5.jpg",
            "heading": "Tourism Is Back In Full Swing In Cancun Mexico",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
            "date": "13th Oct, 2018",
            "category": "Food & Travel",
            "comments": "03"
        }
    },
]

my_app.get("/", (req, res) => {
    res.render("home", { posts })
})
my_app.get("/category", (req, res) => {
    res.render("category")
})
my_app.get("/contact", (req, res) => {
    res.render("contact")
})
my_app.get("/blog-details", (req, res) => {
    res.render("blog-details")
})

my_app.listen(process.env.PORT || 4545, () => {
    console.log(chalk.blue("My app is listening to port : ") + chalk.red("4545"))
})