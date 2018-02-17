var mongoose = require('mongoose');
// if connection to heroku with process.env.MONGODB_URI
// fails then connect to local db 
var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(url);

module.exports = {
  mongoose
};
