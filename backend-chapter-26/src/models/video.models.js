import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String, // cloudinary url,
        required: [true, "Video is required!"]
    },
    thumbnail: {
        type: String, // cloudinary url,
        required: [true, "Thumbnail is required!"]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: [true, "Title is required!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"]
    },
    duration: {
        type: Number, // cloudinary
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});

videoSchema.plugin(mongooseAggregatePaginate);

const Video = mongoose.model('Video', videoSchema);
export default Video;