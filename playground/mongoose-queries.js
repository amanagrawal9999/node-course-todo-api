const {ObjectId}=require('mongodb');
const {mongoose}=require('../server/db/mongoose');
const {Todo}=require('../server/models/todo');

var id='5c5564c51d11838428b19d5f';

console.log(ObjectId.isValid(id));

Todo.find({
  _id:id
}).then((todos)=>{
  console.log('Todos',todos[0]._doc);
});

Todo.findOne({
  _id:id
}).then((todo)=>{
  console.log('Todo',todo._doc);
});

Todo.findById(id).then((todo)=>{
  console.log('Todo by id',todo._doc);
}).catch((e)=>console.log(e));
