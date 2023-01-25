import NavBar from './NavBar'
// import {NavLink} from 'react-router-dom'

function Header({ companyInfo, onChangeTheme }) {
    return (
        <div className="flow-root pb-7 bg-blue-700 pt-3 pl-2 pr-2">
            <span>
                <h1 className="float-left pt-1 text-5xl font-mono">Ascend Window Cleaning </h1>
                <NavBar className="" onChangeTheme={onChangeTheme}/>
            </span>
        </div>
    )
}
export default Header