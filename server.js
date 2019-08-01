const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.set('useFindAndModify', false)

// 引入schedule.js
const schedule = require('./routes/schedule');


/* mongoose连接 */
/* 本地数据库 */
const uri = "mongodb://localhost:27017/scheduledb";
mongoose.connect(uri, { useNewUrlParser: true}).then(
  () => { console.log("connect is success!") },
  err => { console.log(err)}
);

// /* 远程mongodb数据库 https://cloud.mongodb.com     435541908@qq.com/435541908@qq.com*/
// //test是数据库
// const uri = "mongodb+srv://mybells:test1234@cluster0-ryeek.mongodb.net/test?retryWrites=true&ssl=true&authSource=admin";
// mongoose.connect(uri, { useNewUrlParser: true}).then(
//   () => { console.log("Mongodb Connect Sucess") },
//   err => { console.log(err)}
// );



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
// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//设置允许跨域访问该服务.
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

// 使用routes
app.use('/api/schedule', schedule);

app.listen(3000, () => console.log('Example app listening on port 3000!'))