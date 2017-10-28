
//Code 1 just hosting on local at port 3000..
// var express = require('express');
// var app = express();
//
// app.get('/', function(req, res){
//     res.send("Hello");
// });
//
// app.listen(3000);

//The first line imports Express in our file, we have access to it through the variable Express.
// We use it to create an application and assign it to var app.

var express = require('express');
var app = express();

app.get('/hello', function(req, res){
    res.send("Hello World!");
});

app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
});

app.listen(3000);