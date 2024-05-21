import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="first-menu">
                <li><a className="logo">MetaFoodCraft</a></li>
                <li><Link className="menu-link" to="/Home">Home</Link></li>
                <li><Link className="menu-link" to="/nosotros">Bd</Link></li>
            </ul>
            <ul className="second-menu">
                <li><Link className="menu-link" to="/contacto">Contact</Link></li>
                <li><Link className="login" to="/">Log In</Link></li>
                <li><Link className="singup" to="/" >Sing Up</Link></li>
            </ul>
        </nav>
    )  
}