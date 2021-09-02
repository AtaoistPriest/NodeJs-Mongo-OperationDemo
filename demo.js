var express = require('express');

var controller = require('./controller');
var infoSwitch = require('./utils/infoSwitch');

var app = express();
controller(app);
//公开目录(前端资源)
app.use(express.static('./public'));
//处理前端发送的消息
infoSwitch()
//主页地址，8080端口
app.listen(8080);
console.log('服务器已就绪,请使用外置浏览器访问localhost:8080');
