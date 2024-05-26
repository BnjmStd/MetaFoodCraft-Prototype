import { Link } from "react-router-dom"
import "./navbar.css"
import { Moon, Sun } from "../../Icon/Icon"

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="first-menu">
                <li><a className="logo"><h1>MetaFoodCraft</h1></a></li>
            </ul>
            <ul className="second-menu">
                <label>
                    <input type="checkbox" />
                    <Sun className="sun"/>
                    <Moon className="moon" />
                    <span className="toggle"></span>
                    <span className="animateWindow"></span>
                </label>
                <li><Link className="login" to="/">Log In</Link></li>
                <li><Link className="singup" to="/" >Sing Up</Link></li>
            </ul>
        </nav>
    )  
}