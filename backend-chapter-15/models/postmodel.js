const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    postdata: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// you can also create this type schema:
/*
const postSchema = mongoose.Schema({
    postdata: {
        type: String
    },
    user: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});
*/

module.exports = mongoose.model('post', postSchema);