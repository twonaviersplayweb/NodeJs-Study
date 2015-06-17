//检查socket可写状态
function broadcast(message, client) {

	var cleanup = []

	for (var i = 0; i < clientList.length; i+=1) {

		if( client !== clientList[i]) {

			if (clientList[i].writable) {

				clientList[i].write(client.name + "says" + message)

			} else{

				cleanup.push(clientList[i])

				clientList[i].destroy()
			}
		}
	}
//在写入循环中删除死节点，消除垃圾索引
	for (i = 0; i < cleanup.length; i+=1) {

		clientList.splice(clientList.indexof(cleanup[i], 1))
	}
}	

//Display what?