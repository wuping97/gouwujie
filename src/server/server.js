const express = require('express')
const fs = require('fs')
const app = express()

//跨域问题必须写在这
app.all('*',function (req,res,next) {
  //设置允许跨域的域名，*代表都可以，任意域名
  res.header('Access-Control-Allow-Origin','*')
  //允许的header类型
  res.header('Access-Control-Allow-Headers',"content-type")
  //跨域允许的请求方式
  res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS'
  )
  if (req.method.toLowerCase()=='options'){
    res.send(200)
  }else{
    next()
  }
})

app.get('/home/multidata',function (req,res) {
  fs.readFile('./data/homedata/multidata.json',function(err,data){
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.get('/home/tabdata',function (req,res) {
  fs.readFile('./data/homedata/tabdata.json',function(err,data){
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.get('/home/homedata',function (req,res) {
  //判断参数
  const path=`./data/homedata/${req.query.type}${req.query.page}.json`
  fs.readFile(path,function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.get('/category/categorydata',function (req,res) {
  fs.readFile('./data/categorydata/category.json',function(err,data){
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.listen(8000,function(){
  console.log('running')
})
