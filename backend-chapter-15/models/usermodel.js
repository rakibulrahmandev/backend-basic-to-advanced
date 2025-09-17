const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dataassociation');

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
});

// you can also create this type schema:
/*
const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ]
});
*/

module.exports = mongoose.model('user', userSchema);  