import "./navbar.css"
import { Moon, Sun } from "../../Icon/Icon"
import { useStore } from "../../store/theme"

export default function Navbar() {

    const { 
        changeTheme,
     } = useStore(state => ({
        changeTheme: state.changeTheme
     }))

    return (
        <nav className="navbar">
            <ul className="first-menu">
                <li><a className="logo"><h1>MetaFoodCraft</h1></a></li>
            </ul>
            <ul className="second-menu">
                <label>
                    <input 
                        onChange={ changeTheme }
                        type="checkbox"  />
                    <Sun className="sun"/>
                    <Moon className="moon" />
                    <span className="toggle"></span>
                    <span className="animateWindow"></span>
                </label>
            </ul>
            
        </nav>
    )  
}

/*                <li><Link className="login" to="/">Log In</Link></li>
                <li><Link className="singup" to="/" >Sing Up</Link></li> */