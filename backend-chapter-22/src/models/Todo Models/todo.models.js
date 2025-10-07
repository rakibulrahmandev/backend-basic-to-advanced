import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, {timestamps: true});

const Todo = mongoose.model('Tode', todoSchema);
export default Todo;