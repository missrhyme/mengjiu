var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express');

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use('/lib', express.static('lib'))
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get("/api/activites", function(req, res){
  res.send(JSON.stringify({
    status : 200,
    result : [
      {
        id: 111,
        image : 'http://ww3.sinaimg.cn/bmiddle/005GFJLkgw1f168ivy2lfj31kw28gdvk.jpg',
        title : '电信学院沿途有你一起爱晚会晚会晚会晚会晚会晚会晚会晚会晚会晚会晚会晚会',
        location: '上海市嘉定区XX镇',
        startTime: 1458452311111,
        endTime : 1458453311111,
        personNum: 300,
        hot : 0,
        isActive : false,
        type: 1,
        subType : 10011,
        effective: '130天内',
        salary : '200元/天',
        releaseTime : '刚刚'
      },{
        id: 222,
        image : 'http://ww3.sinaimg.cn/bmiddle/005GFJLkgw1f168ivy2lfj31kw28gdvk.jpg',
        title : '招钢琴教师',
        location: '上海市嘉定区XX镇',
        startTime: 1458452311111,
        endTime : 1458453311111,
        personNum: 300,
        hot : 0,
        isActive : false,
        type: 2,
        subType : 10011,
        effective: '130天内',
        salary : '200元/天',
        releaseTime : '刚刚'
      }
    ]
  }))
})

app.get("/api/homeSliders", function(req, res){
  setTimeout(function(){
    res.send(JSON.stringify({
      status : 200,
      result : [
        {
          title: 'vvv',
          image : 'http://ww3.sinaimg.cn/bmiddle/005GFJLkgw1f168ivy2lfj31kw28gdvk.jpg'
        },
        {
          title: 'vv1v',
          image : 'http://ww1.sinaimg.cn/bmiddle/b376de6djw1f0tdzg3vwhj209q09qaak.jpg'
        },
        {
          title: 'vvv2',
          image : 'http://ww2.sinaimg.cn/bmiddle/6910cd56jw1f12soszax9j20gx0d53zn.jpg'
        },
        {
          title: 'vvv3',
          image : 'http://ww4.sinaimg.cn/bmiddle/60f35ddcgw1f0l4dodshlj20rt0qodkr.jpg'
        },
      ]
    }))
  }, 200);
})

app.get("/api/getDetail", function(req, res){
  setTimeout(function(){
    res.send(JSON.stringify({
      status : 200,
      result : {
        title: '这是个很长很长的活动，名字也会很长很长这是个很长很长的活动，名字也会很长很长',
        image: [{
          title: 'vvv',
          image : 'http://ww3.sinaimg.cn/bmiddle/005GFJLkgw1f168ivy2lfj31kw28gdvk.jpg'
        },
        {
          title: 'vv1v',
          image : 'http://ww1.sinaimg.cn/bmiddle/b376de6djw1f0tdzg3vwhj209q09qaak.jpg'
        }],
        time : 1457863074,
        location : '同济大学嘉定小区置信馆',
        view : 2000,
        like : 1000,
        subtitle: '电信学院研究生会',
        author: '电信学院研究生会',
        tel : '13818673323',
        email : 'fuckdog@qq.com',
        qq: '555222555',
        detail : '很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介很长的简介'
      }
    }))
  }, 200);
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
