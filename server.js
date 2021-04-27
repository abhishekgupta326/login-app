const express = require("express");
const app = express();
let con = require("./project-db/db")
let ngrok = require("ngrok")
const cors=require("cors")
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"*",
    methods:[
        'GET',
        'POST'
    ],
    allowedHeaders:
    [
        'content-type'
    ]
}))
let loginroute = require("./project-routes/login");
let singuproute = require("./project-routes/signup");
// let logoutroute = require("./project-routes/logout");
// let profileroute = require("./project-routes/profile")

app.use("/", singuproute);
app.use("/", loginroute);
// app.use("logout", logoutroute);
// app.use("profile", profileroute)

app.listen(8000, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("server runing");
    }
})