import React from 'react'
import './sass/main.scss'

// components
import Footer from './Components/footer'
import Header from './Components/header'

// pages
import Login from './Pages/login'
import CreateAccount from './Pages/createAccount'
import ForgotPassword from './Pages/forgotPassword'
import AccountSettings from './Pages/accountSettings'

// router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="content">
                    <Routes>
                        <Route exact path="/"></Route>
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/createAccount"
                            element={<CreateAccount />}
                        />
                        <Route
                            path="/forgotPassword"
                            element={<ForgotPassword />}
                        />
                        <Route
                            path="/accountSettings"
                            element={<AccountSettings />}
                        />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App
