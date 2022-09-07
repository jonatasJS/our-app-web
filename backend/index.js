const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Log = require("log");
const app = express();
require('./src/db');

// Settings
app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./src/routes/getuser.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    new Log.info(`Server on port ${app.get('port')}`);
});
