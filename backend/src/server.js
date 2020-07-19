const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb').MongoClient;
const bodyParser = require("body-parser");

const app = express();

//Body-Parser middleware and Cross Origin
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// DB Config
const MONGO_URL = `${process.env.MONGO_URL}`;
// console.log(process.env.MONGO_INITDB_ROOT_USERNAME);

// Connect to MongoDB
mongodb.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

const port = 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});