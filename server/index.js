const express = require('express')
const path = require('path')
const app = express()



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mybells:<435541908@qq.com>@cluster0-ryeek.gcp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) {throw err;}
    var dbo = client.db("runoob");
    dbo.collection("devices"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) {throw err;}
        console.log(result);
        client.close();
    });
});



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