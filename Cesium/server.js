const express = require('express');
const res = require('express/lib/response');
const app = express();
var path = require('path');
const cookieParser = require('cookie-parser');

app.use(express.static(path.join(__dirname,'html')));
app.use(express.static(path.join(__dirname,'/js')));
app.use(express.static(path.join(__dirname,'img')));
app.use(
    cookieParser(process.env.COOKIE_SECRET, { sameSite: "none", secure: true })
  );

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'html','base.html'));
    //res.sendFile(path.join(__dirname,'js','test3.json'));
});

app.get('/outline',function(req,res){
    res.sendFile(path.join(__dirname,'html','outline.html'));
})

app.get('/data',function(req,res){
    res.sendFile(path.join(__dirname,'html','data.html'));
})

app.get('/test',function(req,res){
    res.sendFile(path.join(__dirname,'html','testmap.html'));
})


app.get('/fileteredData.txt',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.sendFile(path.join(__dirname,'js','fileteredData.txt'));
})

app.get('/kakao',function(req,res){
    res.sendFile(path.join(__dirname,'html','kakao.html'));
    
})

app.listen(8081,function(){
    console.log("Hello Cesium Log");
});