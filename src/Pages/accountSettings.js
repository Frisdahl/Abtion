import UploadResume from '../Components/uploadResume'
import MyProfile from '../Components/myProfile'

export default function AccountSettings() {
    return (
        <div className="account-container">
            <div className="title-container">
                <h1>Welcome, Alexander!</h1>
            </div>
            <div className="my-account">
                <UploadResume />
                <MyProfile />
            </div>
        </div>
    )
}
