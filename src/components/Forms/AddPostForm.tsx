import { useState } from "react"

export const AddPostForm = ({ onAddPost }:{ onAddPost: (title: string, content: string) => void}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!title || !content) return
        onAddPost(title, content)
        setTitle("")
        setContent("")
    }
    return(
        <form onSubmit={handleForm} className="PostForm">
            <label>Title</label>
            <input
                type="text"
                placeholder="React"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <label>Content</label>
            <textarea
                placeholder="Frontend Library"
                value={content}
                onChange={e => setContent(e.target.value)}
            />
            <button type="submit">Add Post</button>
        </form>
    )
}