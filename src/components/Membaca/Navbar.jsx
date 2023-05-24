import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav className="navbar">
            <a className="navbar-title" href="#">Tuna Grahita Educate</a>
            <ul className="navbar-content">
                <li><Link to={"/"}>About</Link></li>
                <li><Link to={"/"}>Guide</Link></li>
                <li><Link to={"/"}>Materi</Link></li>
            </ul>
        </nav>
    )
}