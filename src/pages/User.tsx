import UserCard from "../components/UserCard";
import { users as InitialUsers } from "../data/user"
import { useState } from "react"

export const User = () => {
    const [users, setUsers] = useState(InitialUsers);
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