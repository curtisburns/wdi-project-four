function errorHandler(err, req, res, next) {
  if(err.name === 'validationError') {
    const response = {};
    for (const key in err.errors) {
      const errorObj = err.errors[key];
      response[key] = errorObj.message;
    }
    return res.status(422).json({ errors: response, message: 'Unprocessable entry'});
  }
  res.status(500).json({ message: 'a server error occurred, please try again later'});
}

module.exports = errorHandler;
