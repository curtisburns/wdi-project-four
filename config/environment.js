const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/practice-app';
const port = process.env.PORT || 4000;
const secret = process.env.SECRET || 'secretphrase';

module.exports = {
  port, dbUri, secret
};
