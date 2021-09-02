/*
* 数据库数据交互模块
* */
var dbManager = {};
//连接数据库
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var fs = require('fs');

//添加
dbManager.add = function(json){
    MongoClient.connect(url, { useNewUrlParser: true , useUnifiedTopology: true}, function(err, db) {
        if (err) throw err;
        //数据库
        var dbo = db.db("Demo");
        //数据库中集合的字段,此处包含日期和文本
        var myobj = {date:json['date'], message: json['message']};
        //加入到ｔｅｘｔ集合中
        dbo.collection('text').insertOne(myobj, function(err, res) {
            if (err) throw err;
            //    console.log("文档插入成功");
            db.close();
        });
    });
}

//查询
dbManager.get = function(callback){

    MongoClient.connect(url, { useNewUrlParser: true , useUnifiedTopology: true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Demo");
        dbo.collection("text"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
        //    console.log("resule : "+result);
            callback(result);  //回调返回结果
            db.close();
        });
    });
}
//删除
dbManager.del = function(json){

    MongoClient.connect(url, { useNewUrlParser: true , useUnifiedTopology: true}, function(err, db) {
        if (err) {
            callback(false);
            throw err;
        }
        var dbo = db.db("Demo");
        var whereStr = {"date":json['date']};  // 查询条件
        dbo.collection("text").deleteOne(whereStr, function(err, obj) {
            if (err) {
                throw err;
            }
            db.close();
        });
    });
}

//更新
dbManager.update = function(json){

    MongoClient.connect(url, { useNewUrlParser: true , useUnifiedTopology: true}, function(err, db) {
        if (err) {
            callback(false);
            throw err;
        }
        var dbo = db.db("Demo");
        var whereStr = {"date":json['date']};  // 查询条件
        var updateStr = {$set: { "message" : json['message'] }};   //更新的文本值
        dbo.collection("text").updateOne(whereStr, updateStr, function(err, res) {
            if (err) {
                throw err;
            }
            db.close();
        });
    });
}
//设为全局
module.exports = dbManager;
