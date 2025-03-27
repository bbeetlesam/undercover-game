//
import { useNavigate } from "react-router-dom";
import "./CreateJoinRoomView.css"

function CreateRoomView() {
    const navigate = useNavigate();
    
    return (
        <>
            <div>
                <div className="back-button">
                    <button onClick={() => navigate("/")}>Back</button>
                </div>
                <h1>Create Room</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter ID"
                    />
                    <button>&gt;</button>
                </div>
                <p>Enter your custom room ID</p>
            </div>
        </>
    );
}

export default CreateRoomView;