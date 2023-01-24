import { NavLink } from "react-router-dom"
function NavBar({isDarkMode, setDarkMode}) {
    
    function handleClick(){
        setDarkMode(!isDarkMode)
    }

        return (
            <div className="float-right" >
            <NavLink className="btn rounded-full" to="/">Home</NavLink>
            <NavLink className="btn rounded-full" to="/contact">Contact Us</NavLink>
            <NavLink className="btn rounded-full" to="/reviews">Reviews</NavLink>
            {/* <button onClick={handleClick} id="toggleBtn" className={isDarkMode? "btn rounded-full" : "btn"}>💡</button> */}
            <button onClick={handleClick}  className={isDarkMode? "btn rounded-full" : "btn"} data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">💡</button>
            </div>
        )
    }
export default NavBar