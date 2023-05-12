const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const PORT = 3000;
const init
const user = [];
app.set("view-engine", "ejs");

app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Kyle" });
});

app.get("/login", (req, res) => {
      res.render("login.ejs");

})

app.post('/login', (req, res) => {
    
})


app.get("/register", (req, res) => {
  res.render("register.ejs");

});

app.post('/register', async (req, res) => {
    try {
        
        const hashpassword = await bcrypt.hash(req.body.password, 10)
        user.push({
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: hashpassword,
        });
        res.redirect('/login');
    } catch (error) {
        res.redirect('/register');
    }
    console.log(user);
})

app.listen(3000, console.log(`App Listening on port ${PORT}...`));
