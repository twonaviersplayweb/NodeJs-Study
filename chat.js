//2.5客户端之间的通信

var net = require('net')

var chatServer = net.createServer()//依照文本例子中此处逗号报错

var clientList = []

chatServer.on('connection', function(client){

	client.write('Hi!\n');

	clientList.push(client)

	client.on('data', function(data){

		for(var i=0;i<clientList.length;i+=1){
			//把数据发送给所有客户端
			clientList[i].write(data)
		}    
	})

})

chatServer.listen(9000)
