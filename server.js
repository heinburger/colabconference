var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/rsvpdb', ['rsvpdb']);

var express = require('express'),
    app = express();

// Configure the web app
app.configure(function(){
    app.use(app.router);
    app.use(express.static(__dirname + '/www'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/api/getRsvps', function (req, res) {

	db.rsvpdb.find(function(err, docs) {
		res.send( docs );
	});
});

app.post('/api/saveRsvp', express.json(), function (req, res) {
	db.rsvpdb.save(req.body);
});

app.listen(80);
