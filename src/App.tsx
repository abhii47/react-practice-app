import './App.css'
import LikeButton from './components/LikeButton'
import { PostCard } from './components/PostCards'
import ToggleMessage from './components/ToggleMessage'
import UserCard from './components/UserCard'
import { posts } from './data/posts'
import { users } from './data/user'
import { Post } from './pages/Post'

function App() {
  return (
    <div>
      <h1>Social App</h1>
      <Post />
      {users.map((user) => {
        return (
          <UserCard
                key={user.id}
                name={user.name}
                email={user.email}
          />
        )
      })}
      {posts.map((post) => {
        return (
          <PostCard 
                key={post.id}
                title={post.title}
                content={post.content}
                comments={post.comments}
          />
        )
      })}
      <LikeButton />
      <ToggleMessage />
    </div>
  )
}

export default App
