// require modules ----------------------------------------------------------------------------->
const mongoose = require('mongoose');

// mongoose connect to DB ---------------------------------------------------------------------->
mongoose.connect("mongodb://localhost:27017/miniproject_part2");

// create user schema -------------------------------------------------------------------------->
const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    age: Number,
    posts: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'post'}
    ]
});

// exports user schema ------------------------------------------------------------------------>
module.exports = mongoose.model('user', userSchema);