import NavBar from './NavBar'
// import {NavLink} from 'react-router-dom'

function Header({ isDarkMode, companyInfo, setDarkMode }) {
    return (
        <div className="flow-root pb-10 pt-3 pl-2 pr-2">
            <span>
                <h1 className="float-left text-5xl font-mono">Ascend Window Cleaning </h1>
                <NavBar className="" setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
            </span>
        </div>
    )
}
export default Header