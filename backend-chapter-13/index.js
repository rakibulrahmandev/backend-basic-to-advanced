//* Authentication & Authorization:
/**
 * cookie -> set cookie in session.
 * bcrypt -> password encryption and compare.
 * jwt -> jsonwebtoken.
*/

/* 
?------------------------------------ cookie ->
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie("name", "rakibulrahman");
    res.send('done');
});

app.get('/read', (req, res) => {
    console.log(req.cookies);
    res.send('read page');
});

app.listen(8000, () => {
    console.log('server running on http://localhost:8000');
});

*/

/*
?------------------------------------ bcrypt ->
const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

app.get('/', (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash('alok', salt, (err, hash) => {
            console.log(hash);
        });
    });
});

app.get('/checkpass', (req, res) => {
    bcrypt.compare('alok', '$2b$10$.hpZnK63h5hYrtQR2/bO/edoewJT4ANZBmXjfY6z4JxgwxoxBo58q', (err, result) => {
        console.log(result);
    });
});

app.listen(8000, () => {
    console.log('server running on http://localhost:8000');
});

*/

/*
?------------------------------------ jwt ->
const express = require('express');
const cookieParser = require('cookie-parser');
const jwt =require('jsonwebtoken');

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    let token = jwt.sign({email: 'pololo@gmail.com'}, 'secret');
    res.cookie('token', token);
    res.send('done');
});

app.get('/verify', (req, res) => {
    let data = jwt.verify(req.cookies.token, 'secret');
    console.log(data);
    res.send('done');
});

app.listen(8000, () => {
    console.log(`server running on http://localhost:8000`);
});

*/