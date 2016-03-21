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
  if(req.query.type == 1){
    res.send(JSON.stringify({
      status : 200,
      result : [
        {
          id: 1,
          image : 'http://img0.imgtn.bdimg.com/it/u=3324422817,2807945407&fm=21&gp=0.jpg',
          title : '“我的社区我做主”——参与式社区规划的理念与运作机制',
          location: '同济大学建筑与城市规划学院C楼',
          startTime: 1458452311111,
          endTime : 1458453311111,
          personNum: 200,
          hot : 0,
          isActive : false,
          type: 1,
          subType : 10011,
          effective: '',
          salary : '',
          releaseTime : ''
        },{
          id: 2,
          image : 'http://img1.imgtn.bdimg.com/it/u=3005295027,582560578&fm=21&gp=0.jpg',
          title : '电信学院2016届硕士研究生毕业典礼',
          location: '同济大学嘉定校区智信馆大厅',
          startTime: 1458452311111,
          endTime : 1458453311111,
          personNum: 400,
          hot : 0,
          isActive : false,
          type: 1,
          subType : 10011,
          effective: '',
          salary : '',
          releaseTime : ''
        },{
          id: 3,
          image : 'http://img1.imgtn.bdimg.com/it/u=3005295027,582560578&fm=21&gp=0.jpg',
          title : '远足社团-2016春季踏青活动（崇明）',
          location: '上海崇明岛',
          startTime: 1458452311111,
          endTime : 1458453311111,
          personNum: 30,
          hot : 0,
          isActive : false,
          type: 1,
          subType : 10011,
          effective: '',
          salary : '',
          releaseTime : ''
        },{
          id: 4,
          image : 'http://img1.imgtn.bdimg.com/it/u=3005295027,582560578&fm=21&gp=0.jpg',
          title : '直通梦想季——同济大学电信学院模拟面试大赛',
          location: '同济大学嘉定校区智信馆307室',
          startTime: 1458452311111,
          endTime : 1458453311111,
          personNum: 200,
          hot : 0,
          isActive : false,
          type: 1,
          subType : 10011,
          effective: '',
          salary : '',
          releaseTime : ''
        }
      ]
    }))
  }else if(req.query.type == 2){
    res.send(JSON.stringify({
      status : 200,
      result : [
        {
          id: 5,
          image : 'http://ww3.sinaimg.cn/bmiddle/a5569db7gw1f23hnetrq6j237k2eou0y.jpg',
          title : '嘉定江桥小学3年级数学家教',
          location: '上海市嘉定区江桥镇',
          startTime: 1458452311111,
          endTime : 1458453311111,
          personNum: 1,
          hot : 0,
          isActive : true,
          type: 2,
          subType : 20011,
          effective: '7天内',
          salary : '100元/小时',
          releaseTime : '刚刚'
        },{
          id: 6,
          image : 'http://ww3.sinaimg.cn/bmiddle/a5569db7gw1f23hnetrq6j237k2eou0y.jpg',
          title : '同济大学信息办招募相关技术人员',
          location: '同济大学四平路校区信息馆',
          startTime: 1458452311111,
          endTime : 1458453311111,
          personNum: 10,
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
          title: 'slider1',
          image : 'http://img5.imgtn.bdimg.com/it/u=1142119117,1666608334&fm=21&gp=0.jpg'
        },
        {
          title: 'slider2',
          image : 'http://img5.imgtn.bdimg.com/it/u=1384606030,1235105707&fm=21&gp=0.jpg'
        },
        {
          title: 'slider3',
          image : 'http://img0.imgtn.bdimg.com/it/u=3264338499,4022972317&fm=21&gp=0.jpg'
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
        title: 'Research on Future Technologies for Automotive System-Light Weight Design, Efficient Powertrain and New Vehicle Test Bench',
        image: [{
          title: '',
          image : 'http://img0.imgtn.bdimg.com/it/u=3264338499,4022972317&fm=21&gp=0.jpg'
        },
        {
          title: '',
          image : 'http://img5.imgtn.bdimg.com/it/u=1384606030,1235105707&fm=21&gp=0.jpg'
        }],
        time : 1457863074,
        location : '同济大学嘉定校区汽车学院宁远楼A311室',
        view : 2000,
        like : 1000,
        subtitle: '汽车学院研究生会',
        author: '汽车学院研究生会',
        tel : '13818673323',
        email : 'test@qq.com',
        qq: '555222555',
        detail : '因为宇宙论是一门既古老又年轻的学科。所以作为宇宙里高等生物的人类不会满足于自身的生存和种族的绵延，还一代代不懈地探索着存在和生命的意义。但是，人类理念的进化是极其缓慢和艰苦的。从“亚里士多德”到“托勒密的地心说”到“哥白尼的日心说”的演化就花了2000年的时间。令人吃惊的是，尽管人们知道世间的一切都在运动，只是到了20世纪20年代因哈勃发现了红移定律后，宇宙演化的观念才进入人类的意识。人们甚至从来没有想到过宇宙还会演化。牛顿的万有引力定律表明，宇宙的物质在引力作用下不可能处于稳定的状态。即使在爱因斯坦的广义相对论中，情况也好不到哪儿去，为了得到一个稳定的宇宙模型，他曾将宇宙常数引进理论中。他们都希望在自己的理论中找到稳定的宇宙模型。可见，宇宙演化的观念并不是产生于这些天才的头脑之中'
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
