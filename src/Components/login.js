export default function Login() {
    return (
        <div className="login-container">
            <h1>Login</h1>

            <div className="login">
                <h2>Abtions jobportal</h2>

                <div className="input-container">
                    <p className="email">Email</p>
                    <input className="input-email" type="text" />

                    <p className="password">Password</p>
                    <input type="password" />
                </div>
                <p id="forgot-password">Forgot password?</p>
                <button className="btn-login">Login</button>
                <h5>Create account</h5>
            </div>
        </div>
    )
}
