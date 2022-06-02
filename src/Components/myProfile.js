const MyProfile = () => {
    return (
        <div className="profile-input-container">
            <h3>My profile</h3>
            <p className="profile-name">Name</p>
            <input className="input-login" type="text"></input>

            <p className="profile-email">Email</p>
            <input className="input-login" type="text"></input>

            <p className="profile-password">Password</p>
            <input className="input-login" type="password"></input>
            <br />
            <button className="btn-save">Save</button>
            <br />
            <button className="btn-logout">Log out</button>
            <br />

            <span>Delete my account</span>
        </div>
    )
}

export default MyProfile
