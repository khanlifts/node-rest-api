const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    // return to exit program if there is an error
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Write a letter'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result.result);
  // });
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // challenge
  // db.collection('Users').deleteMany({name: 'Cyril'}).then((result) => {
  //   console.log(result.result);
  // });

  // db.collection('Users').findOneAndDelete({_id: ObjectID("5a82e0a218f54f558a478b97")}).then((result) => {
  //   console.log(result);
  // });
  // db.close();
});
