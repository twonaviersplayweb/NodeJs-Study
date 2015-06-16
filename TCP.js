//2.1创建新的TCP服务器

var net = require('net')//加载net模块

var chatServer = net.createServer()

chatServer.on('connection', function(client){//on来添加一个事件监听器,每当有新的客户端通过网络来连接服务器时就会触发connection事件
	
	client.write('Hi!\n');
	
	client.write('Bye!\n');
	
	client.end()
})

chatServer.listen(9000)//9000为端口

//Display steps:1.node TCP.js
//2.Windows settings:IP Adress:127.0.0.1
           port:9000
           Connection Type: Telent

//2.Osx settings:telent 127.0.0.1 9000        