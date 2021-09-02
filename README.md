# NodeJs-Mongo-OperationDemo
This is a demo, showing how to manager mongoDB by NodeJs.

You can extend it by your need!


依赖包: nodejs-websocket、mongodb、express；　

可以使用　npm install 包名　下载;

node.js下面的一些操作mongdb的函数可以参考：https://www.runoob.com/nodejs/nodejs-mongodb.html

前后端交互的时候，消息可以使用json封装(demo里面使用的是json)，协议使用的是websocket。

注意前后端交互端口要一致。

infoSwitch.js   负责分析前端操作类型，并调用对应的MongoDB方法。

DBManager.js    负责操作数据库，主要为增删改查

controller.js   负责路由，指定前端显示的界面

server.js       服务器配置
