import arrow from '../assets/arrow.svg'
import Progress from '../Components/progressbar'
import { Link } from 'react-router-dom'

export default function StatusApplication() {
    return (
        <div className="account-container">
            <div className="title-container">
                <h1>Welcome, Alexander!</h1>
            </div>
            <div className="my-account">
                <div className="status-header">
                    <div className="status">
                        <h2>Status on application</h2>
                        <div className="field-type">
                            <p>Javascript developer</p>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <Link
                        style={{ textDecoration: 'none' }}
                        to="/accountSettings"
                    >
                        <div className="my-account-link">
                            <h4>my account</h4>
                            <img src={arrow} alt="" />
                        </div>
                    </Link>
                </div>
                <Progress />

                <div className="information-container">
                    <div className="where">
                        <h4>Where is my application?</h4>
                        <p>
                            You have sent you application for us, and we will
                            read it as soon as possible. You can expect around 2
                            weeks wait time.
                        </p>
                    </div>

                    <div className="additional-information">
                        <h4>Need additional information?</h4>
                        <p>
                            If you have any questions, we are happy to answer.
                            iwanttowork@abtion.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
