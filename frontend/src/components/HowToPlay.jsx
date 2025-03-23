// HowToPlay popup layout

import Popup from './Popup';

function HowToPlay({ onClose }) {
    return (
        <Popup width="500px" height="350px" onClose={onClose}>
            <h2>How to Play</h2>
            <p>Ini adalah panduan cara bermain...</p>
        </Popup>
    );
}

export default HowToPlay;
