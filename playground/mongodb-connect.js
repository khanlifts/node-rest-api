// const MongoClient = require('mongodb').MongoClient;

// is identical to line 1
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    // return to exit program if there is an error
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   // pretty print success log
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users {name, age, location}

  // db.collection('Users').insertOne({
  //   name: 'Cyril',
  //   age: 30,
  //   location: 'Zurich'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert users', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});
