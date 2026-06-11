import { useParams } from "react-router-dom"
import { posts } from "../data/posts"

export const PostDetails = () => {
    const { id } = useParams()
    const post = posts.find(post => post.id === Number(id))
    if(!post) {
        return <h2>Post Not Found</h2>
    }
    return(
        <div className="post-data">
            <h2>{ post.title }</h2>
            <div className="content">
                <span>Content :</span>
                <p>{ post.content }</p>
            </div>
            <div className="comments">
                <span>Comments :</span>
                <div className="comment">
                    { post.comments.map((c,i) => <p key={i}>{c}</p>)}
                </div>
            </div>
        </div>
    )
} 