const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// matches and removes, don't get object back
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// removes and returns object
// Todo.findOneAndRemove()

Todo.findOneAndRemove({_id: '5a87f9efeb528143532f7a25'}).then((todo) => {
  
});

Todo.findByIdAndRemove('5a87f9efeb528143532f7a25').then((todo) => {
  console.log(todo);
});
