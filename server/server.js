console.log("In server.js");
var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose.js');

var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo=new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
})

app.listen(3000,()=>{
  console.log('Server started');
});

/*
 var newTodo= new Todo({
   text:"Cook dinner"
 });

var newTodo=new Todo({

})

newTodo.save().then((doc)=>{
  console.log(doc)
},(e)=>{
  console.log("Unable to save");
});*/