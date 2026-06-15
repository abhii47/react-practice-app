import axiosClient from "./axiosConfig";

export const getAllPosts = async() => {
        const res = await axiosClient.get("/posts")
        return res.data;
}

export const getPost = async(id:string) => {
        const res = await axiosClient.get(`/posts/${id}`)
        return res.data;
}

export const createPost = async(title:string, content:string, creator:string) => {
        const res = await axiosClient.post("/posts", {title, content, creator});
        return res.data;
}

export const deletePost = async(id:string) => {
        await axiosClient.delete(`/posts/${id}`)
        return true;
}