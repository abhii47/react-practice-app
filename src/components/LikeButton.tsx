type LikeButtonProps = {
    onLike: () => void
}

export default function LikeButton({onLike}: LikeButtonProps) {
    return (
        <button onClick={onLike}>Like</button>
    )
}