import users from '../../assets/user_profiles'
import './Settings.scss'

const Settings = () => {
  return (
    <div className="settings-wrapper">
        <h1 className="settings-title">User Profile Settings</h1>
        <div>
            <div className="user-info">
                <img src={users[5]} alt="" />
            </div>
            <div className="submission-form">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" />
                    <label htmlFor="name">Bio</label>
                    <input type="text" />
                    <label htmlFor="name">Email</label>
                    <input type="text" />
                    <div>
                    <input type="submit" />
                    <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
        <div className="purchased-coffee"></div>
    </div>
  )
}

export default Settings