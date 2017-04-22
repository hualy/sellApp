/**
 * Created by Administrator on 2017/4/22.
 */
var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;
// 启动express
var app = express();
// 定义路由
var router = express.Router();

router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});

app.use(router);

// 异步接口的router
//自定义数据接口
var appData = require('./data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRoutes = express.Router();

apiRoutes.get('/seller',function (req,res) {
  res.json({
    errno:0,
    data:seller
  })
});

apiRoutes.get('/goods',function (req,res) {
  res.json({
    errno:0,
    data:goods
  })
});

apiRoutes.get('/ratings',function (req,res) {
  res.json({
    errno:0,
    data:ratings
  })
});

//使用
app.use('/api',apiRoutes);

// 配置static
app.use(express.static('./dist'));

// 启动express
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
});
