import React from 'react'
import './sass/main.scss'

// components
import Footer from './Components/footer'
import Header from './Components/header'
import Login from './Components/login'

// router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
