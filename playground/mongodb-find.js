// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  var db = client.db('TodoApp')

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a66cd7cca8890226f3ca128')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // })

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // })
  // db.close();

  db.collection('Users').find({name:'Jiaqi Duan'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch data ',err);
  })
  db.close();
});
