//创建新的HTTP服务器

var http = require('http');//通过require把 http包含到程序中来

http.createServer(function (req ,res){//调用http.createServer来创建新的HTTP服务器,新创建的服务器未赋值给任何变量，只会成为存活在全局范围内的匿名对象，当调用createServer时，上传一个匿名函数作为参数，此函数绑定在新创建的服务器的事件监听器上进行request事件处理，req为请求对象，res为响应对象
	
	res.writeHead(200,{'Content-Type':'text/plain'});//res.writeHead设置HTTP响应头，否则不能返回真实内容给客户端，200表示HTTP状态代码'200 OK'
	
	res.end('Hello World\n');

}).listen(8124,"127.0.0.1");

console.log('Sever running at http://127.0.0.1:8124/');//console.log将在标准输出stdout上打印信息