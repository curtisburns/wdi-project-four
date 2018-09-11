const express = require('express');
const app = express();
const { dbUri, port } = require('./config/environment');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const Router = require('./config/routes');

//Mongoose
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);

// Static
app.use(express.static(`${__dirname}/public`));

//Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api', Router);

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express is listening on port ${port}`));
