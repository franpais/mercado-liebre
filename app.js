const express = require("express");
const app = express();
const path = require("path");

app.listen(process.env.PORT || 2500, function() {
    console.log("server corriendo en puerto 2500")
});

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "views", "home.html")))
app.get("/register.html", (req, res) => res.sendFile(path.resolve(__dirname, "views", "register.html")))
app.get("/login.html", (req, res) => res.sendFile(path.resolve(__dirname, "views", "login.html")))