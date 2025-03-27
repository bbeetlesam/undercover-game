//
import "./HomeView.css";
import { useNavigate } from "react-router-dom";
import InputBox from "./ui/InputBox";

function HomeView() {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="home-container">
                <h1 className="title">Undercover Who</h1>
                <div className="home-view-input">
                    <InputBox
                        placeholder="Enter your username"
                        maxLength={12}
                        boxSize="300px"
                        boxColor=""
                        textColor=""
                        restrictedChars=" "
                    />
                </div>
                <div className="button-card">
                    <button className="card-button" onClick={() => navigate("/create-room")}>
                        Create Room
                    </button>
                    <button className="card-button" onClick={() => navigate("/join-room")}>
                        Join Room
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