const express = require('express');
const app = express();

const usermodel = require('./models/usermodel');
const postmodel = require('./models/postmodel');

app.get('/', (req, res) => {
    res.send('Hello from backend!');
});

app.get('/create', async (req, res) => {
    let user = await usermodel.create({
        username: 'Rakibul Rahman',
        email: 'rahman@gmail.com',
        age: 18
    });

    res.status(200).send(user);
});

app.get('/create/post', async (req, res) => {
    let post = await postmodel.create({
        postdata: 'Hello! My name is Rakibul Rahman.',
        user: '68cac6c4280b27248393d5c9'
    });

    let user = await usermodel.findOne({_id: '68cac6c4280b27248393d5c9'});
    user?.post.push(post?._id);
    await user.save();

    res.status(200).send({post, user});
});

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000');
});