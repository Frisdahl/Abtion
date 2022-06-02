import { Link } from 'react-router-dom'

export default function CreateAccount() {
    return (
        <div className="login-container">
            <h1>Create account</h1>

            <div className="login">
                <h3>Abtions jobportal</h3>
                <div className="input-container">
                    <p className="name">Name</p>
                    <input className="input-login" type="text" />

                    <p className="email">Email</p>
                    <input className="input-login" type="text" />

                    <p className="password">Password</p>
                    <input className="input-login" type="password" />
                </div>
                <Link style={{ textDecoration: 'none' }} to="/login">
                    {' '}
                    <button className="btn-login">Login</button>
                </Link>
            </div>
        </div>
    )
}
