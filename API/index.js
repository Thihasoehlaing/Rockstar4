var express = require('express');
var app = express();

var mongojs    = require('mongojs');
var db         = mongojs('todo', ['tasks']);
var BodyParser = require('body-parser');

app.use(BodyParser.urlencoded({extended: false}));
app.use(BodyParser.json());

app.get('/tasks', function(req,res){
    db.tasks.find(function(err, data){
        res.json(data);
    });
});

//curl -X POST localhost:8000/tasks -d "subject=subjectname"
app.post('/tasks', function (req, res) {
    var subject = req.body.subject;
    db.tasks.insert({subject , status: 5 },function (err, data) {
        res.json(data);
    });
});

//curl -X PUT localhost:8000/tasks/[id] -d status=1
app.put('/tasks/:id', function(req, res){
   var status = req.body.subject;
   db.tasks.update(
       { "_id": mongojs.ObjectID(id)},
       { $set: {status}},
       { "multi": false},
       function(err, data){
           res.json(data);
       }
   );
});

//curl -X DELETE localhost:8000/tasks/id
app.delete('/tasks/:id', function(req, res){
    var id = req.params.id;
    db.tasks.remove({"_id": mongojs.ObjectID(id)}, function(err, data){
        res.json(data);
    });
});


app.get('/tasks/:id', function(req, res){
    var id = req.params.id;
    db.tasks.find({"_id": mongojs.ObjectID(id)}, function(err, data){
        res.json(data);
    });   
});

app.listen(8000, function(){
    console.log('API server runnig at 8000');
});