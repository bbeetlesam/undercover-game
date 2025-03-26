//
import { useState } from "react";

function HomeView() {
    const [username, setUsername] = useState("");
    const [warningMessage, setWarningMessage] = useState("");
    
    const handleInputChange = (text) => {
        let value = text.target.value.replace(/\s/g, ''); // Restrict whitespace
        
        if (value.length > 10) {
            setWarningMessage("Maximum 12 characters");
        } else if (text.target.value.includes(' ')) {
            setWarningMessage("Cannot contain a whitespace");
        } else {
            setWarningMessage("");
        }
        
        if (value.length <= 10) {
            setUsername(value);
        }
    };
    
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.target.blur();
        }
    };
    
    return (
        <>
            <div className="home-container">
                <h1 className="title">Undercover Who</h1>
                <div className="username-container">
                    <input
                        type="text"
                        className="username-input"
                        value={username}
                        onChange={handleInputChange}
                        onBlur={() => setWarningMessage("")}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter your username"
                    />
                    {warningMessage && <p className="warning-input">{warningMessage}</p>}
                </div>
                <div className="button-card">
                    <button className="card-button">
                        <p>Create Room</p>
                    </button>
                    <button className="card-button">
                        <p>Join Room</p>
                    </button>
                </div>
                <p className="read">
                    I'm a highway star!!
                </p>
            </div>
        </>
    );
}

export default HomeView;