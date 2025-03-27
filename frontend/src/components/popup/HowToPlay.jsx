// HowToPlay popup layout
import Popup from '../ui/Popup.jsx';
import "./HowToPlay.css"

function HowToPlay({ onClose }) {
    return (
        <Popup width="500px" height="350px" onClose={onClose}>
            <h2>How to Play</h2>
            <p>Why u need a tutorial r u dumb huh?</p>
        </Popup>
    );
}

export default HowToPlay;
