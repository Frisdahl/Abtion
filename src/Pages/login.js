import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="login-container">
            <h1>Login</h1>

            <div className="login">
                <h3>Abtions jobportal</h3>

                <div className="input-container">
                    <p className="email">Email</p>
                    <input className="input-login" type="text" />

                    <p className="password">Password</p>
                    <input className="input-login" type="password" />
                </div>
                <Link style={{ textDecoration: 'none' }} to="/forgotPassword">
                    <span id="forgot-password">Forgot password?</span>
                </Link>
                <button className="btn-login">Login</button>
                <Link style={{ textDecoration: 'none' }} to="/createAccount">
                    <h5 id="create-account">Create account</h5>
                </Link>
            </div>
        </div>
    )
}
