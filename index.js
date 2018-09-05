const express = require('express');
const app = express();
const { dbUri, port } = require('./config/environment');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const Router = require('./config/routes');


const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api', Router);

app.listen(port, () => console.log(`Express is listenon on port ${port}`));
