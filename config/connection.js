const { connect, connection } = require('mongoose');
// Add connection to DB
connect('mongodb://127.0.0.1:27017/socialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
