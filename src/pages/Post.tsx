import { useState } from "react"
import { posts as intialPosts } from "../data/posts"
import { PostCard } from "../components/PostCards";

export const Post = () => {
    const [posts, setposts] = useState(intialPosts);

    const handleAddPost = () => {
        const newPost = {
            id: posts.length + 1,
            title: "New Post",
            content: "This is a new post",
            comments: ["x", "y", "z"]
        }
        setposts([...posts, newPost]);
    }
    const handleDeletePost = (id:number) => {
        setposts(posts.filter(post => post.id !== id));
    }
    return (
        <div>
            <button onClick={handleAddPost}>Add Post</button>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <PostCard 
                            title={post.title} 
                            content={post.content} 
                            comments={post.comments} 
                        />
                        <button onClick={() => handleDeletePost(post.id)}>Delete</button>  
                    </div>
                )
            })};
        </div>
    )
}