import axiosClient from "./axiosConfig"

export const createUser = async(name:string, email:string) => {
    const res = await axiosClient.post("/users",{name, email});
    return res.data;
}

export const getUsers = async() => {
    const res = await axiosClient.get("/users");
    return res.data;
}

export const deleteUser = async(id:string) => {
    await axiosClient.delete(`/users/${id}`);
    return true;
}