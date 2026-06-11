type PostCardProps = {
    title:string
    content:string
}
export const PostCard = ({title, content}:PostCardProps) => {
    return(
        <>
            <div className="PostCard">
                <h2>{ title }</h2>
                <p> { content }</p>
            </div>
        </>
    )
}