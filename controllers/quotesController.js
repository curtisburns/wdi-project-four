const Quote = require('../models/quote');

function quotesIndex(req, res, next) {
  Quote.find()
    .then(quote => res.json(quote))
    .catch(next);
}

module.exports = {
  index: quotesIndex
};
