import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    // convert image file to base64?? 
    likeCount: {
        type: Number,
        default: 0,

    },
    createAt: {
        type: Date,
        default: new Date()
    }
    // done schema => turn it into model
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;


