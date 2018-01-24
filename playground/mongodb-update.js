// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  var db = client.db('TodoApp')


  // db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5a66e8abca8890226f3ca3f8')},{
  //   $set:{
  //     completed:true
  //   }
  // },{returnOriginal:false}).then((result)=>{
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({name:'Mike'},{
    $set:{
      name:'Jackson'
    },
    $inc:{
      age:1
    }
  },{returnOriginal:false}).then((result)=>{
    console.log(result);
  })

  db.close();
});
