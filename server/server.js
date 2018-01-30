const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {ObjectID} = require('mongodb');


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  const todo = new Todo({
    text: req.body.text
  })
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  })
});

app.get('/todos', (req,res) =>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  })
});

//GET /todos/1234
app.get('/todos/:id',(req,res)=>{
  const id = req.params.id;
  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }
  else{
    Todo.findById(id).then((todo)=>{
      if(!todo){
        return res.status(404).send();
      }
      res.send({todo});
    }).catch((e)=>{
      res.status(404).send();
    })
  }
  // valid id using isValid
  //404 - send back empty send

  //findById
  //
});
app.delete('/todos/:id',(req,res)=>{
  const id = req.params.id;
  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }
  else{
    Todo.findByIdAndRemove(id).then((todo)=>{
      if(!todo){
        res.status(404).send();
      }
      else{
        res.status(200).send(todo);
      }
    }).catch((e)=>{
      res.status(400).send();
    })
  }

})

app.listen(port,()=>{
  console.log(`Started on port ${port}`);
})

module.exports = {app};
