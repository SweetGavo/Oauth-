const express = require("express");
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(
})


app.listen(3000, console.log(`App Listening on port ${PORT}...`));
