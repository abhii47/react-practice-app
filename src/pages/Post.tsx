import { useEffect, useState } from "react"
import { PostCard } from "../components/PostCards";
import LikeButton from "../components/LikeButton";
import { Link } from "react-router-dom";
import { AddPostForm } from "../components/Forms/AddPostForm";
import { SearchBox } from "../components/Forms/SearchBox";
import { createPost, deletePost, getAllPosts } from "../api/postApi";

type Post = {
    _id:string
    title:string
    content:string
    comments:string[]
    likes:number
}

export const Post = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [allPosts, setAllPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getAllPosts();
                if(data){
                    setPosts(data.posts);
                    setAllPosts(data.posts);
                }
            } catch (err:any) {
                console.error("Failed to fetch: ", err)
            } finally{
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if(loading) return <h2>Loading posts...</h2>;
    if(posts.length === 0)  return <h2>No posts</h2>;

    const handleAddPost = async(title:string, content:string) => {
        try {
            const data = await createPost(title, content, "6a2bd62e32e49f32875600e7");
            if(data){
                const updated = [...posts, data.post]
                setPosts(updated);
                setAllPosts(updated);
            }else{
                console.error("Failed to add post: ", data.message)
            }
        } catch (err:any) {
            console.error("Failed to add post: ", err)
        }
    }

    const handleSearch = (term:string) => {
        if(!term){
            setPosts(allPosts) // reset if empty
        } else {
            const filtered = allPosts.filter(post =>
                post.title.toLowerCase().includes(term.toLowerCase()) ||
                post.content.toLowerCase().includes(term.toLowerCase())
            )
            setPosts(filtered)
        }
    }
    const handleLikePost = (id:string) => {
        const updated = posts.map(post => post._id === id ? {...post, likes: post.likes + 1 } : post)
        setPosts(updated);
        setAllPosts(updated);    
    }
    const handleDeletePost = async(id:string) => {
        try {
            const data = await deletePost(id);
            if(data){
                const updated = posts.filter(post => post._id !== id);
                setPosts(updated);
                setAllPosts(updated);
            }else{
                console.error("Failed to delete post")
            }
        } catch (err:any) {
            console.error("Failed to delete post: ", err)
        }
    }
    return (
        <div className="Post-Container">
            <SearchBox onSearch={handleSearch} />
            <AddPostForm onAddPost={handleAddPost} />
            {posts.map((post) => {
                return (
                    <div key={post._id}>
                        <PostCard 
                            title={post.title} 
                            content={post.content}
                            likes={post.likes} 
                        />
                        <button onClick={() => handleDeletePost(post._id)}>Delete</button>
                        <LikeButton 
                            onLike={() => handleLikePost(post._id)}
                        />  
                        <button>
                            <Link to={`/posts/${post._id}`}>Details</Link>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}