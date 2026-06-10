import { useState } from "react"

type UserCardProps = {
    name:string
    email:string
}

export default function UserCard({ name, email }:UserCardProps){
    const [showEmail, setShowEmail] = useState(true);
    const handleToggleEmail = () => setShowEmail(showEmail ? false : true);
    return(
        <>
            <div className="UserCard">
                <h2>{ name }</h2>
                <button onClick={handleToggleEmail}>ShowEmail</button>
                {showEmail && <p>{email}</p>}
            </div>
        </>
    )
}