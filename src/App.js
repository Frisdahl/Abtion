import React from 'react'
import Content from './Components/content.js'
import './sass/main.scss'

// components
import Footer from './Components/footer'
import Header from './Components/header'
import Login from './Components/login'

// router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <>
        <Router>
            <div className="App">
                <Header />
                <Content />
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </div>
        </Router>
        </>
    )
}

export default App
