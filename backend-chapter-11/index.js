//* MongoDB database:
/**
 * MongoDB install on desktop with MongoDB compass.
 * MongoDB connection.
 * Schema.
 * Model.
 * CRUD -> Create, Read, Update, Delete.
*/

const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send('hey');
});

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: 'Rakibul Rahman',
        username: '@rahman',
        email: 'rahman@gmail.com'
    });

    res.send(createdUser);
});

app.get('/read', async (req, res) => {
   let readUser = await userModel.find();

    res.send(readUser);
});

app.get('/update', async (req, res) => {
   let updatedUser = await userModel.findOneAndUpdate({username: '@rahman'}, {name: "Rahman"}, {new: true});

    res.send(updatedUser);
});


app.get('/delete', async (req, res) => {
   let deletedUser = await userModel.findOneAndDelete({name: 'Rahman'});

    res.send(deletedUser);
});



app.listen(3000, () => {
    console.log('server running on http://localhost:3000');
});