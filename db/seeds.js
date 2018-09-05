const { dbUri } = require('../config/environment');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);

//Require used models - remember to drop collection

// const ---data = [{

// }]
