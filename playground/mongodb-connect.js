//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');
  const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('unable to inseret todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });
  db.collection('Users').insertOne({
    name: 'pradhuman singh',
    age: 27,
    location: 'noida'
  },(err, result) => {
    if(err) {
      return console.log('unable to insert the user', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  client.close();
});
