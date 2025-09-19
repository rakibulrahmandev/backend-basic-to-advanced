// require modules ----------------------------------------------------------------------------->
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('./models/userModel');
const postModel = require('./models/postModel');

// create app ---------------------------------------------------------------------------------->
const app = express();

// set app use --------------------------------------------------------------------------------->
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// middelwares --------------------------------------------------------------------------------->
function isLoggedIn(req, res, next) {
    if (req.cookies.token === '') {
        res.redirect('/sign_in');
    } else {
        let userVerify = jwt.verify(req.cookies.token, 'mini_project');
        req.user = userVerify;
        next();
    };
};

// create get route ---------------------------------------------------------------------------->
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/sign_up', (req, res) => {
    res.render('sign_up');
});

app.get('/sign_in', (req, res) => {
    res.render('sign_in');
});

app.get('/profile', isLoggedIn, async (req, res) => {
    let {email} = req.user;
    
    let user = await userModel.findOne({email: email}).populate('posts');
    res.render('profile', {user});
});

app.get('/sign_out', (req, res) => {
    res.cookie('token', '');
    res.redirect('/sign_in');
});

// create post route --------------------------------------------------------------------------->
app.post('/sign_up', async (req, res) => {
    let {name, username, password, email, age} = req.body;

    let user = await userModel.findOne({email: email});
    if (user) return res.status(409).render('sign_up_error');

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return console.error(err);
        bcrypt.hash(password, salt, async (err, hash) => {
            if (err) return console.error(err);
            let createUser = await userModel.create({
                username: username,
                name: name,
                email: email,
                password: hash,
                age: age
            });

            let token = jwt.sign({email: email, userid: createUser?._id}, 'mini_project');

            res.cookie('token', token);
            res.status(200).render('sign_up_success');
        });
    });
});

app.post('/sign_in', async (req, res) => {
    let {email, password} = req.body;
    
    let user = await userModel.findOne({email: email});
    if (!user) return res.status(401).send('sign_in_error');

    let isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) return res.status(401).send('sign_in_error');

    let token = jwt.sign({email: email, userid: user?._id}, 'mini_project');
    res.cookie('token', token);
    res.render('sign_in_success');

});

app.post('/post', isLoggedIn, async (req, res) => {
    let {content} = req.body;
    let {email} = req.user;
    
    let user = await userModel.findOne({email: email});
    let post = await postModel.create({
        user: user?._id,
        content: content
    });

    user?.posts.push(post);
    await user.save();
    res.redirect('/profile');
});

// server start -------------------------------------------------------------------------------->
app.listen(3000, () => {
    console.log('server running on http://localhost:3000');
});