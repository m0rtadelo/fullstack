
var mongoose = require('mongoose');
mongoose.connect('mongodb://user:password@localhost/fullstack', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!')
});
var UsersSchema = new mongoose.Schema({});
var Users = mongoose.model('users', new mongoose.Schema({}));
var Roles = mongoose.model('roles', new mongoose.Schema({}));
async function getUsers() {
  return await Users.find({});
}
let users = {
    1: {
      id: '1',
      username: 'Robin Wieruch',
    },
    2: {
      id: '2',
      username: 'Dave Davids',
    },
  };
  
  let messages = {
    1: {
      id: '1',
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: '2',
      text: 'By World',
      userId: '2',
    },
  };
  
module.exports = {
    users: getUsers(),
    messages,
  };