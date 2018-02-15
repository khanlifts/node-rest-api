const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    // return to exit program if there is an error
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a82e400eb528143532f5c14")
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

// Challenge
  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID("5a82e1eb36076f559776ad6f")
  // }, {
  //   $set: {
  //     name: 'Holy Molly'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID("5a82e1eb36076f559776ad6f")
  // }, {
  //   $inc: {
  //     age: 3
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').updateMany({
  //   _id: new ObjectID("5a82e1eb36076f559776ad6f")
  // },{
  //   $set: {
  //     name: 'Mei Lii',
  //     location: 'China'
  //   },
  //   $inc: {
  //     age: 5
  //   }
  // }).then((result) => {
  //   console.log(result.result);
  // })

  // db.close();
});
