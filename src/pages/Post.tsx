import { useState } from "react"
import { posts as intialPosts } from "../data/posts"
import { PostCard } from "../components/PostCards";
import LikeButton from "../components/LikeButton";
import { Link } from "react-router-dom";

export const Post = () => {
    const [posts, setposts] = useState(intialPosts);
    const handleDeletePost = (id:number) => {
        setposts(posts.filter(post => post.id !== id));
    }
    return (
        <div className="Post-Container">
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <PostCard 
                            title={post.title} 
                            content={post.content} 
                        />
                        <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                        <LikeButton />  
                        <button>
                            <Link to={`/posts/${post.id}`}>Details</Link>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}