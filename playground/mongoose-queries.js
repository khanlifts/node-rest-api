const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// id from todos item
var id = "5a854521d8a2f2af83f48d98";
var id2 = "5a854521d8a2f2af83f48d99"

// check if id is not valid
if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// returns array
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos: ', todos);
});

// returns document
Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo: ', todo);
});

Todo.findById(id2).then((todo) => {
  // check if id isn't in database
  if (!todo) {
    return console.log('Id not found.');
  }
  console.log('Todo: ', todo);
}).catch((e) => console.log(e));

// Challenge

// get model to query
const {User} = require('./../server/models/user');
var userId = "5a8450f0f9d2249d70220a3b";

if (!ObjectID.isValid(userId)) {
  console.log('User ID not valid.');
}

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not found.');
  }
  console.log('User: ', user);
}).catch((e) => console.log(e));
