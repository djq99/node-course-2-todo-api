// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  var db = client.db('TodoApp')
  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed: false
  // },(err,result) =>{
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })

// insert a new doc into Users(name, age, location)

  // db.collection('Users').insertOne({
  //   name:'Jiaqi Duan',
  //   age:28,
  //   location:'San Francisco'
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert user',err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })
  db.close();
});
