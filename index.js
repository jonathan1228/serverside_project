var express = require('express');
var app = express();
var sharejs = require('share');
require('redis');

//options
var options = {
  db: {type: 'redis'},
};

//express server attached to sharejs
sharejs.server.attach(app, options);




//view engine ejs

app.set('view engine','ejs');

//public folder
app.use(express.static(__dirname + '/public'));

//routes 

app.get('/',function(req,res){
	res.render('pad');
});

app.get('/(:id)', function(req, res) {
  res.render('pad');
});

var port = process.env.PORT || 8000;
app.listen(port,function(){
	console.log("port is open");
})