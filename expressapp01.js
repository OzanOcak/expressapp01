var express = require ('express');
var app = express();
var routes=require('./routes');

app.set('view engine','ejs');

app.locals.pagetitle="ozanocak - "; 

app.get('/',routes.home);
app.get('/about',routes.about);




app.listen(3000,function(req,res){
   console.log('listening to localhost:3000');
});