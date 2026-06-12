import { Request, Response } from "express";
import { User } from "../models";

const postUser = async(req:Request, res:Response) => {
        try {
            const { name, email } = req.body;
            const user = await User.create({ name, email });
            res.status(201).json({message: "User created successfully", user});
        } catch (err:any) {
            res.status(500).json({message: err.message});
        }
}

const getUsers = async(req:Request, res:Response) => {
    try {
        const users = await User.find();
        res.status(200).json({message: "Users fetched successfully", users});
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
}

const deleteUser = async(req:Request, res:Response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "User deleted successfully", user});
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
}

export default {
    postUser,
    getUsers,
    deleteUser
}
