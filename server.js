const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
//const routes = require('./routes/index');
const app = express();

//view engine setup
//app.set('views', path.join(__dirname, '/views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	res.render('home', {title:'SR SHAW Exercise'});
});

//app.use(express.static(__dirname + '/public'));
//app.use('/', routes);

app.listen(3000, function(){
	console.log('Server on port 3000');
});
