//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error)
  {
    console.log('Unable to connect to mongodb server.');
    return;
  }
  console.log('connected to mongodb serever.');

db.collection('Todos').findOneAndUpdate({_id:new ObjectID("5c3097274d2e04e5bdf91d36")},
{
  $set:{
    completed:true
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
})
//db.close();
});
