const express = require("express");
const hbs = require("hbs");

var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});

app.get("/", (req, res) => {
  res.render("homepage.hbs", {
    pageTitle: "Home",
    welcomeMessage:
      "Welcome! Today is the start of something new, something big!"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page"
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Bad request"
  });
});

// /bad - send back json with error message

app.listen(3000, () => {
  console.log("Server up on port 3000");
});
