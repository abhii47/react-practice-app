import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getPost } from "../api/postApi"

type comment = {
    _id:string
    message:string
}
type Post = {
    _id:string
    title:string
    content:string
    comments:comment[]
    likes:number
}

export const PostDetails = () => {
    const { id } = useParams()
    const [post, setPost] = useState<Post | null>(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        const fetchPost = async() => {
            try {
                const data = await getPost(id!);
                setPost(data.post);
            } catch (err:any) {
                console.error("Failed to fetch post: ", err)
            }finally{
                setLoading(false)
            }
        }
        fetchPost();
    },[]);

    if(loading) return <h2>Loading posts...</h2>
    if(!post) return <h2>Post Not Found</h2>
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
                    { post.comments.map((c) => <p key={c._id}>{c.message}</p>)}
                </div>
            </div>
            <button>
                <Link to={`/add-comment/${id}`}>Add comment</Link>
            </button> 
        </div>
    )
} 