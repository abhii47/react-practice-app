import { createUser, deleteUser, getUsers } from "../api/userApi";
import { AddUserForm } from "../components/Forms/AddUserForm";
import UserCard from "../components/UserCard";
import { useEffect, useState } from "react"

type User = {
    _id:string
    name:string
    email:string
}

export const User = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchUsers = async() => {
            try {
                const data = await getUsers();
                if(data){
                    setUsers(data.users);
                }
            } catch (err:any) {
                console.error("Failed to fetch users: ", err);
            } finally {
                setloading(false);
            }
        }
        fetchUsers();
    },[]);

    if(loading) {
        return <h2>Loading users...</h2>
    }
    if(users.length === 0){
        return <h2>No Users</h2>
    }
    const handleUser = (id:string) => {
        try {
            const data = deleteUser(id);
            if(data){
                const updated = users.filter(user => user._id !== id);
                setUsers(updated);
            }
        } catch (err:any) {
            console.error("Failed to delete user: ", err);
        }
    }

    const handleAddUser = async(name:string, email:string) => {
        try {
            const data = await createUser(name, email);
            if(data){
                setUsers(user => [...user, data.user]);
            }
        } catch (err:any) {
            console.error("Failed to add user: ", err);
        }
    };

    return (
        <div className="User-Container">
            <AddUserForm onAddUser={handleAddUser} />
            {users.map((user) => {
                return(
                    <div key={user._id}>
                        <UserCard name={user.name} email={user.email} />
                        <button onClick={() => handleUser(user._id)}>Delete</button>
                    </div>
                )
            })};
        </div>
    )
}