//2.3监听所有的连接请求

var net = require('net')

var chatServer = net.createServer()

chatServer.on('connection',function(client){

	client.write('Hi!\n');

	client.on('data',function(data) {//调用新的监听器来关注data事件
		
		console.log(data)
	})
	
})

chatServer.listen(9000)
