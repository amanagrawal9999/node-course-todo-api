//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error)
  {
    console.log('Unable to connect to mongodb server.');
    return;
  }
  console.log('connected to mongodb serever.');

/*
db.collection("Todos").find().toArray().then((docs)=>{
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log("Unable to fetch",err);
});
*/
/*db.collection("Todos").find({completed:false}).toArray().then((docs)=>{
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log("Unable to fetch",err);
});*/
/*db.collection("Todos").find({
  _id:new ObjectID('5c2b21453b72a930187077ab')
}).toArray().then((docs)=>{
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log("Unable to fetch",err);
});*/
db.collection("Todos").find().count().then((count)=>{
  console.log('Todos');
  console.log("count:"+count);
},(err)=>{
  console.log("Unable to fetch",err);
});
//db.close();
});
