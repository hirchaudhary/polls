var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var path        = require('path');
var session     = require('express-session')
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, '/static/dist')));
app.use(session({secret:"reasonstohidethiskeyisyou"}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000)