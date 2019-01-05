//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error)
  {
    console.log('Unable to connect to mongodb server.');
    return;
  }
  console.log('connected to mongodb serever.');

  /*db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    console.log(result);
  });*/

  db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    console.log(result);
  });

//db.close();
});
