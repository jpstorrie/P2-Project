import { NavLink } from "react-router-dom"
function NavBar({isDarkMode}) {


        return (
            <div className="right" >
            <NavLink className="NavBar" to="/">Home</NavLink>
            <NavLink className="NavBar" to="/contact">Contact Us</NavLink>
            <NavLink className="NavBar" to="/reviews">Reviews</NavLink>
            <button id="toggleBtn" className={isDarkMode ? "dark" : "app light"}>💡</button>
            </div>
        )
    }
export default NavBar