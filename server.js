const express = require('express');
const bodyParser = require('body-parser');
const path = require("path")

// create express app
const app = express();
var cors = require("cors");
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Sur-Way keep, a simple survey application." });
});

var api_router = require('./app/router');
app.use(api_router)

app.use(express.static(path.join(__dirname, "react", "sur-way-app", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "react", "sur-way-app", "build", "index.html"));
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});