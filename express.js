//2.14使用Express的基本WEB服务器

var express = require ('express')

var app = express.createServer()

app.get('/', function(req, res) {

	res.send('Welcome to Node Twitter')
})

app.listen(8000)

//Add the Express to Windows:npm install -g express-generator