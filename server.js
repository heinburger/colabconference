var express = require('express'),
    app = express();

// Configure the web app
app.configure(function(){
    app.use(app.router);
    app.use(express.static(__dirname + '/www'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/api/test', function (req, res) {
    res.send({ msg: 'Hello World' });
});

app.listen(80);
