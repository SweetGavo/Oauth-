const express = require("express");
const app = express();

const PORT = 3000;
app.set('view-engine')
app.get('/', (req, res) => {
    res.render('index.ejs');
})


app.listen(3000, console.log(`App Listening on port ${PORT}...`));
