import React from "react";
import "./Popup.css";

const Popup = ({ width, height, onClose, children }) => {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div
                className="popup-box"
                style={{ width: width || "400px", height: height || "300px" }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="popup-close" onClick={onClose}>✕</button>
                {children} {/* element */}
            </div>
        </div>
    );
};

export default Popup;