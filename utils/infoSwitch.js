/*
* 与前端信息交互模块
* */
//通讯协议
var ws = require('nodejs-websocket');
var dbManager = require('./DBManager');
//前端发送端口为８０８１，所以服务器需要监听８０８１端口
var managerPort = 8081;

module.exports = function () {

    var serverManager = ws.createServer(function (conn) {
    //    console.log("client connected");
        conn.on('text',function (info) {
        //    console.log(info);
            var json = JSON.parse(info);
            //筛选前端消息操作类别
            var type = json['type'];
            console.log(type)
            if(type=='add'){  //验证
                dbManager.add(json);

            }else if(type=='main'){  //获取界面数据
                dbManager.get(function (data) {
                    datas = JSON.stringify(data);
                    if(datas){
                        //var str = "{\"type\":\"main\",\"messages\":"+datas+"}";
                        console.log(datas);
                        //将查询数据发送给前端
                        conn.sendText(datas);
                    }
                });
            }else if(type=='update'){
                dbManager.update(json);
            }else if(type == "delete"){
                dbManager.del(json)
            }
        });
    }).listen(managerPort);
};
