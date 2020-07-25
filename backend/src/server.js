const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

//Body-Parser middleware and Cross Origin
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongodb.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB successfully connected'))
    .catch(err => console.log(err));

const port = 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});