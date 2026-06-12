import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
    message: { 
        type: String, 
        required: true 
    },
    postId: { 
        type: Schema.Types.ObjectId, 
        ref: "Post", 
        required: true 
    },
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    }
}, { timestamps: true });

export default mongoose.model("Comment", commentSchema);