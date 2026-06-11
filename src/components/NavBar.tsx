import { Link } from "react-router-dom"

export const NavBar = () => {
    return(
        <nav className="Navbar">
            <Link to="/posts">Post</Link>
            <Link to="/users">User</Link>
        </nav>
    )
}