// require modules ----------------------------------------------------------------------------->
const mongoose = require('mongoose');

// create post schema -------------------------------------------------------------------------->
const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    content: String,
    likes: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
    ]
});

// exports post schema ------------------------------------------------------------------------>
module.exports = mongoose.model('post', postSchema);