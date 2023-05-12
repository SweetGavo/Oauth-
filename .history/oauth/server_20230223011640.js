const express = require("express");
const app = express();

const PORT = 3000;
app.set("view-engine", "ejs");
app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Kyle" });
});

app.get("/login", (req, res) => {
      res.render("login.ejs");

})
app.post('')


app.get("/register", (req, res) => {
  res.render("register.ejs");

});

app.post('/register', (req, res) => {
    
})

app.listen(3000, console.log(`App Listening on port ${PORT}...`));
