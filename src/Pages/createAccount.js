import { Link } from 'react-router-dom'
import arrow from '../assets/arrow.svg'

export default function CreateAccount() {
    return (
        <div className="login-container">
            <div className="heading">
                <a href="https://abtion-website.webflow.io/karriere">
                    <img src={arrow} alt="Big laptop svg" />
                    <div>Tilbage til karriere</div>
                </a>
                <h3>Stillingsopslag</h3>
                <h1>JavaScript Developer</h1>
            </div>

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
