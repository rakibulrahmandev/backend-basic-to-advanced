const express = require('express');
const path = require('path');

const app = express();

// setting up parser for form:
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

// setting up route:
app.get('/', function(req, res){
    res.render('index')
});

app.get('/user/:username', function(req, res){
    res.send(`welcome, ${req.params.username}`);
});

app.get('/author/:username/:age', function(req, res){
    res.send(`welcome, ${req.params.username}. your age ${req.params.age}`);
});

// server start:
app.listen(8000, function(){
    console.log(`server running on http://localhost:8000`);
});