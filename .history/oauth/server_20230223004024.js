const express = require("express");
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('HOMEPAGE...')
})


app.listen(3000, console.log(`App Listening on port ${PORT}...`));
