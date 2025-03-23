// Header component
import settingIcon from '../assets/react.svg'
import settingsIcon from '../assets/settings_36dp_000000_FILL1_wght200_GRAD0_opsz40.svg'
// import { FaCog } from "react-icons/fa";
import './Header.css'

function Header() {
    return (
        <header className="header">
            {/* Left Section */}
            <div className="header-left">
                <button className="game-logo-btn">
                    <img src={settingIcon} alt="Game Logo" className="game-logo" />
                </button>
                <h1 className="game-title">undercover</h1>
            </div>
            
            {/* Center Section (Invisible Placeholder) */}
            <div className="header-center"></div>
            
            {/* Right Section */}
            <div className="header-right">
                <button className="settings-button">
                    <img src={settingsIcon} alt="Settings" />
                </button>
            </div>
        </header>
    );
}

export default Header;