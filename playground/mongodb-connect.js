//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

//var obj=new ObjectID();
//console.log(obj.id);

/*var user={
  name:"abc",
  age:25
}
var {name}=user;
console.log(name);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error)
  {
    console.log('Unable to connect to mongodb server.');
    return;
  }
  console.log('connected to mongodb serever.');

  /*db.collection('Todos').insertOne({
    text:'Something to do',
    completed:false
  },(error,result)=>{
    if(error)
    {
      console.log('Unable to insert record',error);
      return;
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });*/
  /*db.collection('Users').insertOne({
    name:"Aman",
    age:26,
    location:"Mumbai"
  },(error,result)=>{
    if(error)
    {
      console.log('Unable to insert record',error);
      return;
    }
    console.log(result.ops[0]._id.getTimestamp());
  });*/
db.close();
});
