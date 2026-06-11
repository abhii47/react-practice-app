import { useEffect, useState } from "react"
import { posts as intialPosts } from "../data/posts"
import { PostCard } from "../components/PostCards";
import LikeButton from "../components/LikeButton";
import { Link } from "react-router-dom";
import { AddPostForm } from "../components/Forms/AddPostForm";
import { SearchBox } from "../components/Forms/SearchBox";

export const Post = () => {
    const [allPosts, setAllPosts] = useState(intialPosts.map(post => ({...post, likes: 0})));
    const [posts, setposts] = useState(allPosts);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const loadedPosts = intialPosts.map(post => ({...post, likes: 0}))
            setAllPosts(loadedPosts);
            setposts(loadedPosts);
            setloading(false);
        },1000)
    }, []);

    if(loading) {
        return <h2>Loading posts...</h2>
    }

    if(posts.length === 0){
        return <h2>No posts</h2>
    }

    const handleAddPost = (title:string, content:string) => {
        const newPost = {
            id: allPosts.length + 1,
            title,
            content,
            comments: [],
            likes: 0
        }
        const updated = [...allPosts, newPost]
        setAllPosts(updated)
        setposts(updated)
    }

    const handleSearch = (term:string) => {
        if(!term){
            setposts(allPosts) // reset if empty
        } else {
            const filtered = allPosts.filter(post =>
                post.title.toLowerCase().includes(term.toLowerCase()) ||
                post.content.toLowerCase().includes(term.toLowerCase())
            )
            setposts(filtered)
        }
    }
    const handleLikePost = (id:number) => {
        const updated = allPosts.map(post => post.id === id ? {...post, likes: post.likes + 1 } : post)
        setAllPosts(updated)
        setposts(updated)    
    }
    const handleDeletePost = (id:number) => {
        const updated = allPosts.filter(post => post.id !== id)
        setAllPosts(updated)
        setposts(updated)
    }
    return (
        <div className="Post-Container">
            <SearchBox onSearch={handleSearch} />
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