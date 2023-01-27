import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'
// import {NavLink} from 'react-router-dom'

function Header({ companyInfo, onChangeTheme }) {
    return (
        <div className="flow-root pb-2 bg-blue-700 pt-3 pl-2 pr-2">
            <span>
            <h1 className="font-all float-left pt-2 text-6xl"><NavLink to="/">Ascend Window Cleaning </NavLink></h1>
                <NavBar onChangeTheme={onChangeTheme}/>
            </span>
        </div>
    )
}
export default Header