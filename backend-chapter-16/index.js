const express = require('express');
const cookieParser = require('cookie-parser');


const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('./models/userModel');
const postModel = require('./models/postModel');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// middleware ------------------------------------------------------------------------------------->
const isLoggedIn = (req, res, next) => {
    if (req.cookies.token === '') {
        res.send('You must be login!');
    } else {
        let userInfo = jwt.verify(req.cookies.token, 'mini_project');
        req.user = userInfo;
        next();
    };
};

// sign up ---------------------------------------------------------------------------------------->
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/sign_up', async (req, res) => {
    let {name, username, password, email, age} = req.body;
    
    let userExist = await userModel.findOne({email});
    if (userExist) return res.status(500).send('User already registered!');

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return console.error(err);
        bcrypt.hash(password, salt, async (err, hash) =>{
            let user = await userModel.create({name, username, password: hash, email, age});
            let token = jwt.sign({email: email, userid: user?._id}, 'mini_project');
            
            res.cookie('token', token);
            res.status(200).send('User register successfully!');
        });
    });

});

// sign in ---------------------------------------------------------------------------------------->
app.get('/sign_in', (req, res) => {
    res.render('login');
});

app.post('/sign_in', async (req, res) => {
    let {email, password} = req.body;

    let userExist = await userModel.findOne({email});
    if (!userExist) return res.status(500).send('Somthing went wrong!');

    bcrypt.compare(password, userExist?.password, (err, result) => {
        if (result) {
            let token = jwt.sign({email: email, userid: userExist?._id}, 'mini_project');
            res.cookie('token', token);
            res.status(200).send('Login successufull!');
        } else {
            res.redirect('/sign_in');
        };
    });
});

// logout ---------------------------------------------------------------------------------------->
app.get('/logout', (req, res) => {
    res.cookie('token', '');
    res.redirect('/sign_in');
});

// protected route ------------------------------------------------------------------------------->
app.get('/profile', isLoggedIn, (req, res) => {
    console.log(req.user);
});

app.listen(3000, () => {
    console.log('server running on http://localhost:3000');
});