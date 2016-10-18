var express = require('express'),
	bodyParser = require('body-parser'),
	port = process.env.port || 3000,
	app = express();

require('dotenv').config(); // loads process.env environment variables

app.use(express.static('app'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(require('./library/module/routes'));

var server = app.listen(port, function () {
	var host = server.address().address,
		port = server.address().port;

	console.log('App running at //%s:%s', host, port);
});
