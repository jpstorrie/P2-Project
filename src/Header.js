import NavBar from './NavBar'
import {NavLink} from 'react-router-dom'
function Header({ isDarkMode }) {
    return (
        <div className="">
            <h1 className="">Title/Logo <NavBar isDarkMode={isDarkMode} /></h1>

        </div>
    )
}
export default Header