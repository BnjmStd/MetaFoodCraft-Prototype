import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="#" className="logo"><h1>MetaFoodCraft</h1></a>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
                <li><Link className="menu-link" to="#">Productos</Link></li>
                <li><Link className="menu-link" to="#">Contacto</Link></li>
            </ul>
        </nav>
    )  
}