import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ForgotPassword() {
    const [msgState, setMsgState] = useState(true)

    function handleClick() {
        setMsgState(msgState => !msgState)
    }

    let stateCheck = msgState ? 'active' : ''

    return (
        <div className="login-container">
            <h1>Forgot password</h1>

            <div className="login">
                <h3>Issues logging in?</h3>
                <div className="input-container">
                    <span>
                        Enter your e-mail and we will send a link, so you can
                        get back to your account
                    </span>

                    <p className="reset-email">Email</p>
                    <input className="input-login" type="text" />

                    <h4 id="reset-msg" className={`${stateCheck}`}>
                        An email with a temporary password has been sent to you!
                    </h4>
                </div>

                <button onClick={handleClick}>Reset password</button>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <h5 id="create-account">Login</h5>
                </Link>
            </div>
        </div>
    )
}
