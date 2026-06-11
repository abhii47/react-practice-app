type PostCardProps = {
    title:string
    content:string
    likes:number
}
export const PostCard = ({title, content, likes}:PostCardProps) => {
    return(
        <>
            <div className="PostCard">
                <h2>{ title }</h2>
                <p>{ content }</p>
                <p>likes: { likes }</p>
            </div>
        </>
    )
}