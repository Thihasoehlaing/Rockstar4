var express = require('express');
var app = express();

app.get('/tasks', function(req,res){
    res.json({"result": "Task List"});
});

app.get('/tasks/:id', function(req, res){
    res.json({"result": "Task View " + req.params.id});
});

app.listen(8000, function(){
    console.log('API server runnig at 8000');
});