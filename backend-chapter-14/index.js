const express = require('express');
const path = require('path');
const usermodel = require('./models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('create');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/logout', (req, res) => {
    res.render('logout');
});

// without hashing password:
/*
app.post('/create', async (req, res) => {
    let {username, email, password, age} = req.body;
    let userCreated = await usermodel.create({
        username, email, password, age
    });

    res.send(userCreated);
});
*/

// with hashing password:
/*
app.post('/create', (req, res) => {
    let {username, email, password, age} = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return console.error(err);
        bcrypt.hash(password, salt, async (err, hash) => {
            if (err) return console.error(err);
            let userCreated = await usermodel.create({
                username: username,
                email: email,
                password: hash,
                age: age
            });
            res.status(200).send(userCreated);
        });
    });
});
*/

// with set cookie and jsonwebtoken:
app.post('/create', (req, res) => {
    let {username, email, password, age} = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return console.error(err);
        bcrypt.hash(password, salt, async (err, hash) => {
            if (err) return console.error(err);
            let userCreated = await usermodel.create({
                username: username,
                email: email,
                password: hash,
                age: age
            });

            let token = jwt.sign({email: email}, 'authentication');
            res.cookie('token', token);
            res.status(200).send(userCreated);
        });
    });
});

app.post('/logout', (req, res) => {
    res.cookie('token', '');
    res.redirect('/');
});

app.post('/login', async (req, res) => {
    let user = await usermodel.findOne({email: req.body.email});
    if (!user) return res.send('somthing is wrong!');

    bcrypt.compare(req.body.password, user?.password, (err, result) => {
        if (err) return console.error(err); 

        if (result) {
            let token =  jwt.sign({email: user?.email}, 'authentication');
            res.cookie('token', token);
            res.send('login successful!');
        } else {
            res.send('somthing is wrong!');
        };
    });
});

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});