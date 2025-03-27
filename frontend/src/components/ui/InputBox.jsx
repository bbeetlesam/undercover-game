//
import { useState } from "react";
import "./InputBox.css";

const InputBox = ({
    placeholder = "Enter text",
    maxLength = 10,
    boxSize = "250px",
    boxColor = "#f8f7f3",
    textColor = "#000",
    restrictedChars = "",
    onValueChange
}) => {
    const [inputValue, setInputValue] = useState("");
    const [warningMessage, setWarningMessage] = useState("");
    
    const handleInputChange = (e) => {
        let value = e.target.value;
        
        const regex = new RegExp(`[${restrictedChars}]`, "g");
        value = value.replace(regex, "");
        
        if (value.length > maxLength) {
            setWarningMessage(`Maximum ${maxLength} characters`);
        } else {
            setWarningMessage("");
        }
        
        if (value.length <= maxLength) {
            setInputValue(value);
            if (onValueChange) onValueChange(value);
        }
    };
    
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.target.blur();
        }
    };
    
    return (
        <div className="input-container">
            <input
                type="text"
                style={{
                    width: boxSize,
                    backgroundColor: boxColor,
                    color: textColor,
                    border: "1px solid black",
                    padding: "8px",
                    borderRadius: "5px"
                }}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                onBlur={() => setWarningMessage("")}
            />
            <div className="warning-container">
                {warningMessage && <p style={{ color: "red", fontSize: "12px" }}>{warningMessage}</p>}
            </div>
        </div>
    );
}

export default InputBox;