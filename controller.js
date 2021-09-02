
//路由，由于只有一个界面所以直接导向主页
module.exports = function (app) {
    app.get('/',function (req,res) {
        res.sendFile('public/index.html', { root: __dirname });
    });

}
