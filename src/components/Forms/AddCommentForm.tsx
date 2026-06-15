import React, { useState } from "react"
import { addComment } from "../../api/commentApi";
import { useParams } from "react-router-dom";

export const AddCommentForm = () => {
    const { id } = useParams();
    const [message, setMessage] = useState("")
    const handleComment = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!message || !id) return
        const res = await addComment(message, id,"6a2bd79532e49f32875600e9");
        console.log(res.message);
        setMessage("");
    }
    return(
        <form onSubmit={handleComment} className="CommentForm">
            <label>Comment</label>
            <input
                type="text"
                placeholder="Add a comment"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">Add comment</button>
        </form>
    )
}