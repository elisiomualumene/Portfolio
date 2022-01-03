import Style  from './Menu.module.css'
import { Link } from "react-router-dom";

const Menu = () => {
    return(
    <div className={Style.menu}>
            <h1>Portfo<span>lio.</span></h1>
        
        <nav className={Style.NavBar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/services">Services</Link>
                </li>

                <li>
                    <Link to="/experience">Experience</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
    );
}


export default Menu;