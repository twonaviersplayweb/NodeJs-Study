//2.15添加基础API

var express = require ('express')

var app = express.createServer()
app.listen(8000)

var tweets = []

app.get('/', function(req, res) {

	res.send('Welcome to Node Twitter')
})

app.post('/send', express.bodyParser(), function(req, res) {
	if (req.body && req.body.tweet) {
		tweets.push(req.body.tweet)
		res.send({status:"OK", message: "Tweet received"})
	} else{
		//没有tweet?
		res.send({status:"nok", message:"No tweet received"})
	}
})

app.get('/tweets', function(req,res) {
	res.send(tweets)
})