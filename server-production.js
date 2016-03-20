var express = require('express');

var app = new (require('express'))()
var port = 3000

app.use('/dist', express.static('dist'))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index-production.html')
})

app.get("/api/activites", function(req, res){
  if(req.query.type == 1){
    res.send(JSON.stringify({
      status : 200,
      result : [
        {
          id: 1,
          image : 'http://ww3.sinaimg.cn/bmiddle/005GFJLkgw1f168ivy2lfj31kw28gdvk.jpg',
          title : '同济樱花',
          location: '同济大学本部',
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
          id: 2,
          image : 'http://ww3.sinaimg.cn/bmiddle/005GFJLkgw1f168ivy2lfj31kw28gdvk.jpg',
          title : '讲座',
          location: '同济大学嘉定校区',
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
  }else if(req.query.type == 2){
    res.send(JSON.stringify({
      status : 200,
      result : [
        {
          id: 3,
          image : 'http://ww3.sinaimg.cn/bmiddle/a5569db7gw1f23hnetrq6j237k2eou0y.jpg',
          title : '招家教老师，小学数学',
          location: '上海市杨浦区四平路',
          startTime: 1458452311111,
          endTime : 1458453311111,
          personNum: 300,
          hot : 0,
          isActive : false,
          type: 2,
          subType : 20011,
          effective: '7天内',
          salary : '50元/小时',
          releaseTime : '刚刚'
        },{
          id: 4,
          image : 'http://ww3.sinaimg.cn/bmiddle/a5569db7gw1f23hnetrq6j237k2eou0y.jpg',
          title : '招钢琴教师',
          location: '上海市黄浦区',
          startTime: 1458452311111,
          endTime : 1458453311111,
          personNum: 300,
          hot : 0,
          isActive : false,
          type: 2,
          subType : 20011,
          effective: '130天内',
          salary : '200元/天',
          releaseTime : '刚刚'
        }
      ]
    }))
  }else{
    res.send(JSON.stringify({
      status : 200,
      result : []
    }))
  }

})

app.get("/api/homeSliders", function(req, res){
  setTimeout(function(){
    res.send(JSON.stringify({
      status : 200,
      result : [
        {
          title: 'vvv',
          image : 'http://ww3.sinaimg.cn/bmiddle/48e837eegw1f20xyk1bdpj20li0e3aps.jpg'
        },
        {
          title: 'vv1v',
          image : 'http://ww3.sinaimg.cn/bmiddle/c3011adagw1f23h5eabskj21hc0zk116.jpg'
        },
        {
          title: 'vvv2',
          image : 'http://ww2.sinaimg.cn/bmiddle/4c8b9e95jw1f23g5j66kkj21be0qodvr.jpg'
        }
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
