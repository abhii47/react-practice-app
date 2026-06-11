import { useEffect, useState } from "react"
import { posts as intialPosts } from "../data/posts"
import { PostCard } from "../components/PostCards";
import LikeButton from "../components/LikeButton";
import { Link } from "react-router-dom";
import { AddPostForm } from "../components/Forms/AddPostForm";

export const Post = () => {
    const [posts, setposts] = useState(intialPosts.map(post => ({...post, likes: 0})));
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setposts(intialPosts.map(post => ({...post, likes:0 })))
            setloading(false);
        },1000)
    }, []);

    if(loading) {
        return <h2>Loading posts...</h2>
    }

    const handleAddPost = (title:string, content:string) => {
        const newPost = {
            id: posts.length + 1,
            title,
            content,
            comments: [],
            likes: 0
        }
        setposts([...posts, newPost]);
    }
    const handleLikePost = (id:number) => {
        setposts(posts.map(post => post.id === id ? {...post, likes: post.likes + 1 } : post))
    }
    const handleDeletePost = (id:number) => {
        setposts(posts.filter(post => post.id !== id));
    }
    return (
        <div className="Post-Container">
            <AddPostForm onAddPost={handleAddPost} />
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <PostCard 
                            title={post.title} 
                            content={post.content}
                            likes={post.likes} 
                        />
                        <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                        <LikeButton 
                            onLike={() => handleLikePost(post.id)}
                        />  
                        <button>
                            <Link to={`/posts/${post.id}`}>Details</Link>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}