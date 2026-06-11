type UserCardProps = {
    name:string
    email:string
}

export default function UserCard({ name, email }:UserCardProps){

    return(
        <>
            <div className="UserCard">
                <h2>{ name }</h2>
                <p>{email}</p>
            </div>
        </>
    )
}