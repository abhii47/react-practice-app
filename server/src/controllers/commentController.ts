import { Request, Response } from "express";
import { Comment, Post } from "../models";

const postComment = async(req:Request, res:Response) => {
    try {
        const { message, postId, userId } = req.body;
        const comment = await Comment.create({  message, postId, userId });
        await Post.findByIdAndUpdate(postId, { $push: { comments: comment._id } });
        res.status(201).json({message: "Comment created successfully", comment});
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
}

const deleteComment = async(req:Request, res:Response) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Comment deleted successfully", comment});
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
}

export default {
    postComment,
    deleteComment
}