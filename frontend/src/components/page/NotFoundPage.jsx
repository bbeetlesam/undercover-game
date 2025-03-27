// 404 Not Found page
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css"

function NotFoundPage() {
    const navigate = useNavigate();
    
    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <p>Please be a good person at least for a day.</p>
            <button onClick={() => navigate("/")}>
                Go Home
            </button>
        </div>
    );
}

export default NotFoundPage;