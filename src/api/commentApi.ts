import axiosClient from "./axiosConfig"

export const addComment = async(message:string, postId:string, userId:string) => {
    const res = await axiosClient.post("comments",{message, postId, userId});
    return res.data;
}

export const deleteComment = async(id:string) => {
    const res = await axiosClient.delete(`comments/${id}`);
    return res.data;
}