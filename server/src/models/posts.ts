import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  content: { 
    type: String, 
    required: true 
  },
  creator:{
    type: Schema.Types.ObjectId, 
    ref: "User", 
    required: true
  },
  comments: [{ 
    type: Schema.Types.ObjectId, 
    ref: "Comment", 
    required: true 
  }],
  likes: { 
    type: Number, 
    default: 0 
  },
}, { timestamps: true }
);

export default mongoose.model("Post", postSchema);