require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

//Connect backend with DataBase
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
.then((response) => console.log(`MongoDB: ${response.connections[0].name}`))
.catch((err) => console.log(err));

//BodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors middleware
app.use(cors());

//Log HTTP requests
app.use(logger('dev'));


//Backend PORT Listener
app.listen(process.env.PORT, () => console.log(`Listening on Port: ${process.env.PORT}`));

module.exports = app;