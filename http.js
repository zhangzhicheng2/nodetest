var http=require("http")
var server=http.createServer();
server.on("request",function(request,response){
    console.log("收到客户端请求URL:"+request.url)
    response.write("hello")
    response.end()

})
server.listen(3333,function(){
    console.log("启动")
})