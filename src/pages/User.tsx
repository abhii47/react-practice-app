import UserCard from "../components/UserCard";
import { users as InitialUsers } from "../data/user"
import { useEffect, useState } from "react"

export const User = () => {
    const [users, setUsers] = useState(InitialUsers);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setUsers(InitialUsers);
            setloading(false);
        },1000);
    },[]);

    if(loading) {
        return <h2>Loading users...</h2>
    }
    if(users.length === 0){
        return <h2>No Users</h2>
    }
    const handleUser = (id:number) => {
        setUsers(users.filter(user => user.id != id));
    }



    return (
        <div className="User-Container">
            {users.map((user) => {
                return(
                    <div key={user.id}>
                        <UserCard name={user.name} email={user.email} />
                        <button onClick={() => handleUser(user.id)}>Delete</button>
                    </div>
                )
            })};
        </div>
    )
}