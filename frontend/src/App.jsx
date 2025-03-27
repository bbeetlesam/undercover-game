// App (all components are wrapped in StrictMode at main.jsx)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Header from './components/layout/Header.jsx'
import HomeView from './components/page/HomeView.jsx'
import NotFoundPage from './components/page/NotFoundPage'
import CreateRoomView from './components/page/CreateRoomView.jsx'
import JoinRoomView from './components/page/JoinRoomView.jsx'

function App() {
    return (
        <>
            <Header />
            <Router>
                <Routes>
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/" element={<HomeView />} />
                    <Route path="/create-room" element={<CreateRoomView />} />
                    <Route path="/join-room" element={<JoinRoomView />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
