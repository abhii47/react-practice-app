type PostCardProps = {
    title:string
    content:string
    comments:string[]
}
export const PostCard = ({title, content, comments}:PostCardProps) => {
    return(
        <>
            <div className="PostCard">
                <h2>{ title }</h2>
                <p> { content }</p>
                <ul> 
                    { comments.map(c => <li>{c}</li>) }
                </ul>
            </div>
        </>
    )
}