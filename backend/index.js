const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Log = require("log");
const mongdb = require('./src/db');
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
  try {
    const db = await mongdb();
    const collection = db;
    console.log(collection);
    const users = await collection.find({}).toArray();
    console.log(users);
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

// Starting the server
app.listen(app.get('port'), () => {
    new Log.info(`Server on port ${app.get('port')}`);
});
