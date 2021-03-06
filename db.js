const config = require('./config/index');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true); 
mongoose.connect(config.db,{ useNewUrlParser: true } || 
  'mongodb://localhost/merndemo');
mongoose.Promise = global.Promise;

module.exports = {
  User: require('./models/User'),
};
