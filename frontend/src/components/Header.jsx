// Header component
// import { FaCog } from "react-icons/fa";
import { useState, useRef } from 'react';
import gameLogo from '../assets/react.svg';
import settingsIcon from '../assets/settings_36dp_000000_FILL1_wght200_GRAD0_opsz40.svg';

import './Header.css';
import HowToPlay from './HowToPlay';

function Header() {
    const [showGameDropdown, setShowGameDropdown] = useState(false);
    const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
    const [popupType, setPopupType] = useState(null);
    
    const gameTimeout = useRef(null);
    const settingsTimeout = useRef(null);
    
    // Hover for game dropdown
    const handleGameEnter = () => {
        clearTimeout(gameTimeout.current);
        setShowGameDropdown(true);
    };
    const handleGameLeave = () => {
        gameTimeout.current = setTimeout(() => {
            setShowGameDropdown(false);
        }, 150); // Delay 150ms
    };
    
    // Hover for settings dropdown
    const handleSettingsEnter = () => {
        clearTimeout(settingsTimeout.current);
        setShowSettingsDropdown(true);
    };
    const handleSettingsLeave = () => {
        settingsTimeout.current = setTimeout(() => {
            setShowSettingsDropdown(false);
        }, 150);
    };
    
    return (
        <>
            <header className="header">
                {/* Left Section */}
                <div className="header-left">
                    <div
                        className="logo-container"
                        onMouseEnter={handleGameEnter}
                        onMouseLeave={handleGameLeave}
                    >
                        <img src={gameLogo} alt="Game Logo" className="game-logo" />
                        <ul className={`dropdown game-dropdown ${showGameDropdown ? 'visible' : ''}`}
                            data-dropdown-align="left"
                        >
                            <div className="dropdown-arrow"></div>
                            <li onClick={() => console.log("Game Info")}>Game Info</li>
                            <li onClick={() => setPopupType("howToPlay")}>How to Play</li>
                            <li onClick={() => console.log("Credits")}>Credits</li>
                        </ul>
                    </div>
                    <p className="game-title">undercover</p>
                </div>
                
                {/* Center Section */}
                <div className="header-center"></div>
                
                {/* Right Section */}
                <div className="header-right">
                    <div
                        className="settings-container"
                        onMouseEnter={handleSettingsEnter}
                        onMouseLeave={handleSettingsLeave}
                    >
                        <img src={settingsIcon} alt="Settings" className="settings-icon" />
                        <ul className={`dropdown settings-dropdown ${showSettingsDropdown ? 'visible' : ''}`}
                            data-dropdown-align="right"
                        >
                            <div className="dropdown-arrow"></div>
                            <li onClick={() => console.log("Settings")}>Settings</li>
                            <li onClick={() => console.log("Profile")}>Profile</li>
                            <li onClick={() => console.log("Log Out")}>Log Out</li>
                        </ul>
                    </div>
                </div>
            </header>
        
            {popupType === "howToPlay" && <HowToPlay onClose={() => setPopupType(null)} />}
        </>
    );
}

export default Header;