import { useState } from "react";

export default function LikeButton() {
    const [likes, setLikes] = useState(0);
    const addLike = () => setLikes(likes + 1);
    return (
        <button onClick={addLike}>
            {likes} Likes
        </button>
    )
}