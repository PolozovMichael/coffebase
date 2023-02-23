import users from '../../assets/user_profiles'
import './Settings.scss'

const Settings = () => {
  return (
    <div className="settings-wrapper">
        <h1 className="settings-title">User Profile Registration</h1>
        <div>
            <div className="user-info">
                <img src={users[5]} alt="" />
            </div>
            <div className="submission-form">
                <form>
                    <label htmlFor="name">Name</label>
                    <input required type="text" />
                    <label htmlFor="name">Bio</label>
                    <input required type="text" />
                    <label htmlFor="name">Email</label>
                    <input required type="email" />
                    <label htmlFor="name">Password</label>
                    <input required type="password" />
                    <div>
                        <div>Update profile</div>
                        <div>Cancel</div>
                    </div>
                </form>
            </div>
        </div>
        <div className="purchased-coffee"></div>
    </div>
  )
}

export default Settings