const express = require('express');
const path = require('path');
const userModel = require('./models/user');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', async (req, res) => {
    let {name, email, image} = req.body;
    await userModel.create({
        name,
        email,
        image
    });
    res.redirect('/read');
});

app.get('/read', async (req, res) => {
    let readUsers = await userModel.find();
    res.render('read', {users: readUsers});
});

app.get('/update/:id', async (req, res) => {
    let user =  await userModel.findOne({_id: req.params.id});
    res.render('update', {user});
});

app.post('/update/:id', async (req, res) => {
    let {name, email, image} = req.body;
    await userModel.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
            name,
            email,
            image
        }
    );
    res.redirect('/read');
});

app.get('/delete/:id', async (req, res) => {
    await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect('/read');
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});