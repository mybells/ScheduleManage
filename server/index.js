const express = require('express')
const path = require('path')
const app = express()
const mongoose=require('mongoose');


/* mongoose连接 */
/* 本地数据库 */
const uri = "mongodb://localhost:27017/local";
mongoose.connect(uri, { useNewUrlParser: true}).then(
  () => { console.log("yes") },
  err => { console.log(err)}
);

// /* 远程mongodb数据库 https://cloud.mongodb.com     435541908@qq.com/435541908@qq.com*/
// //test是数据库
// const uri = "mongodb+srv://mybells:test1234@cluster0-ryeek.mongodb.net/test?retryWrites=true&ssl=true&authSource=admin";
// mongoose.connect(uri, { useNewUrlParser: true}).then(
//   () => { console.log("Mongodb Connect Sucess") },
//   err => { console.log(err)}
// );

// 模型骨架
var Schema = new mongoose.Schema({
  one: {type: String},
});
// 由schema构造生成Model
var Model = mongoose.model('Test',Schema);//集合是小写复数tests
// 查询数据
Model.find({one: '1'},function(err,res){
  if(err){
    console.log(err);
  } else {
    console.log(res);
  }
})


/* mongodb连接 */
// const MongoClient = require('mongodb').MongoClient;
// var uriTestDb = "mongodb+srv://mybells:test1234@cluster0-ryeek.mongodb.net?retryWrites=true&ssl=true&authSource=admin";
// MongoClient.connect(uriTestDb,{ useNewUrlParser: true}, function(err, client) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Mongodb Connect Sucess")
//     const db = client.db("test");//选择数据库
//     const collection = db.collection('tests');//选择集合
//     collection.find({}).toArray(function(err, docs) {
//       console.log("Found the following records");
//       console.log(docs)
//     });
//   }
// });

app.use('/static', express.static(path.join(__dirname, 'public')))

//设置允许跨域访问该服务.
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/ss', (req, res) => res.send("Hello World!"))

app.listen(3000, () => console.log('Example app listening on port 3000!'))