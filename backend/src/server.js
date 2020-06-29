const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Body-Parser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    }))

const port = 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});