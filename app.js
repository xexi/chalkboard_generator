/**
 * Created by sbsch_ham on 2016-09-26.
 */
var express = require('express');
var path = require('path');
var app = express();
// port setting
var PORT = 5151;

app.listen(PORT,function(){
    console.log('Express started in ' + app.get('env') + ' mode on host [ ' + PORT + ' ] - port');
});

// template
var exphbs = require('express-handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.hbs', exphbs({defaultLayout:'single.hbs', extname:'.hbs', layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine', '.hbs');

// router setting
var RoutingService = require('./routes/setting');
RoutingService(app);