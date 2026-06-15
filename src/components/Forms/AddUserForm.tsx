import { useState } from "react"

export const AddUserForm = ({onAddUser}:{onAddUser:(name:string, email:string)=>void}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    const handleForm = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!name || !email) return;
        onAddUser(name, email);
        setName("")
        setEmail("")
    }

    return(
        <form onSubmit={handleForm} className="UserForm">
            <label>Name</label>
            <input
                type="text"
                placeholder="Abhi"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <label>Email</label>
            <input
                type="email"
                placeholder="abhi@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button type="submit">Add User</button>
        </form>
    )
}