import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Post } from './pages/Post'
import { NavBar } from './components/NavBar'
import { User } from './pages/User'
import { PostDetails } from './components/PostDetail'

function App() {
  return (
    <BrowserRouter>
        <div className='main-container'>
          <h1>Social App</h1>
          {/* Navbar */}
          <NavBar />

          {/* Routes */}
            <Routes>
              <Route path='/posts' element={<Post />} />
              <Route path='/users' element={<User />} />
              <Route path='/posts/:id' element={<PostDetails />} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
