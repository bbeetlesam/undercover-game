// App (all components are wrapped in StrictMode at main.jsx)
import './App.css'

import Header from './components/Header'
import HomeView from './components/HomeView'

function App() {
    return (
        <>
            <Header />
            <HomeView />
        </>
    )
}

export default App
