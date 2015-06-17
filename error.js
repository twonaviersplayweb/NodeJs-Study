//记录错误

chatServer.on('connection',function(client){

	client.name = client.remoteAddress + ':' + client.remotePort

	client.write('Hi' + client.name + '!\n');

	console.log(client.name + 'joined')

	clientList.push(client)

	client.on('data', function(data) {

		broadcast(data, client)
	})

	client.on('end',function() {

		console.log(client.name + 'quit')

		clientList.splice(clientList.indexof(client),1)
	})

	client.on('error', function(e) {
		console.log(e)
	})
})

//Display what and how can it be?