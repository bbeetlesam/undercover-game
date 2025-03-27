//
import { useNavigate } from "react-router-dom";

function CreateRoomView() {
    const navigate = useNavigate();
    
    return (
        <div>
            <h1>Create Room</h1>
            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
    );
}

export default CreateRoomView;