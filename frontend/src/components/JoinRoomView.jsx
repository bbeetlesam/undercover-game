//
import { useNavigate } from "react-router-dom";
import "./CreateJoinRoomView.css"

function JoinRoomView() {
    const navigate = useNavigate();
    
    return (
        <>
            <div>
                <div className="back-button">
                    <button onClick={() => navigate("/")}>Back</button>
                </div>
                <h1>Join Room</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter ID"
                    />
                    <button>&gt;</button>
                </div>
                <p>Enter your friend's room ID</p>
            </div>
        </>
    );
}

export default JoinRoomView;