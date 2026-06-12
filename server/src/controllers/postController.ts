import { Request, Response } from "express";
import Post from "../models/posts";

const createPost = async(req:Request, res:Response) => {
    try {
        const { title, description, creator } = req.body;
        const post = await Post.create({ title, content:description, creator });
        res.status(201).json({message: "Post created successfully", post});
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
}

const getPosts = async(req:Request, res:Response) => {
    try {
        const posts = await Post.find().populate('comments',"message");
        res.status(200).json({message: "Posts fetched successfully", posts});
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
}

const deletePost = async(req:Request, res:Response) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Post deleted successfully", post});
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
}

export default {
    createPost,
    getPosts,
    deletePost
}