//2.10把聊天服务器改造的更加健壮

chatServer.on('connection', function(client){

	client.name = client.remoteAddress + ':' + client.remotePort

	client.write('Hi' + client.name + '!\n');

	clientList.push(client)

	client.on('data', function(data) {

		broadcast(data, client)

	})

    client.on('end', function() {

    	clientList.splice(clientList.indexof(client),1)

    }) 

}）

//Error in display