import Sprite from '../Sprite/Sprite'
import users from '../../assets/user_profiles'
import './Sidebar.scss'
import dropItem1 from '../../assets/drop_item1.png'
import dropItem2 from '../../assets/drop_item2.png'
import dropItem3 from '../../assets/drop_item3.png'
import dropItem4 from '../../assets/drop_item4.png'
import dropItem5 from '../../assets/drop_item5.png'
import {useNavigate} from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    const routeHandler = (URL:any) => {
        navigate(URL)
    }
  return (
    <div className="sidebar-wrapper">
        <div className="drop">
            <img src={dropItem1} alt="" />
            <img src={dropItem2} alt="" />
            <img src={dropItem3} alt="" />
            <img src={dropItem4} alt="" />
            <img src={dropItem5} alt="" />
        </div>
        <div className="main-sidebar">
            <h1 className="sidebar-title">Dashboard</h1>
            <div className="sidebar-line"></div>
            <div className="navigation">
                <div onClick={() => routeHandler('/')} className={window.location.pathname==='/' ? 'nav active' : 'nav'}><Sprite id="home"/><h1 className="nav-title">Home</h1></div>
                <div onClick={() => routeHandler('/marketplace')} className={window.location.pathname==='/marketplace' ? 'nav active' : 'nav'}><Sprite id="market"/><h1 className="nav-title">Marketplace</h1></div>
                <div onClick={() => routeHandler('/settings')} className={window.location.pathname==='/settings' ? 'nav active' : 'nav'}><Sprite id="settings"/><h1 className="nav-title">Settings</h1></div>
                <div onClick={() => routeHandler('/faq')} className={window.location.pathname==='/faq' ? 'nav active' : 'nav'}><Sprite id="faq"/><h1 className="nav-title">FAQ</h1></div>
            </div>
            <h1 className="sidebar-title">Statistics</h1>
            <div className="sidebar-line"></div>
            <div className="statistics">
                <div className="stat-block">
                    <div className="stat-row">
                        <div><img src={users[0]} alt="" /></div>
                        <div>
                            <h1>Anne Couture</h1>
                            <h3>5 min ago</h3>
                        </div>
                    </div>
                    <div className="stat-row-bottom">
                        <h1>Last order - </h1>
                        <h3>10 min ago</h3>
                    </div>
                    <div className="stat-row-bottom">
                        <h1>The most expensive order - </h1>
                        <h3> 0.012 ETH</h3>
                    </div>
                    <div className="stat-row-bottom">
                        <h1>The longest session - </h1>
                        <h3>35 min</h3>
                    </div>
                </div>
                <div className="stat-block">
                    <div className="stat-row">
                        <div><img src={users[0]} alt="" /></div>
                        <div>
                            <h1>Anne Couture</h1>
                            <h3>5 min ago</h3>
                        </div>
                    </div>
                    <div className="stat-row-bottom">
                        <h1>Last order - </h1>
                        <h3>10 min ago</h3>
                    </div>
                    <div className="stat-row-bottom">
                        <h1>The most expensive order - </h1>
                        <h3> 0.012 ETH</h3>
                    </div>
                    <div className="stat-row-bottom">
                        <h1>The longest session - </h1>
                        <h3>35 min</h3>
                    </div>
                </div>
                <div className="stat-block">
                    <div className="stat-row">
                        <div><img src={users[0]} alt="" /></div>
                        <div>
                            <h1>Anne Couture</h1>
                            <h3>5 min ago</h3>
                        </div>
                    </div>
                    <div className="stat-row-bottom">
                        <h1>Last order - </h1>
                        <h3>10 min ago</h3>
                    </div>
                    <div className="stat-row-bottom">
                        <h1>The most expensive order - </h1>
                        <h3> 0.012 ETH</h3>
                    </div>
                    <div className="stat-row-bottom">
                        <h1>The longest session - </h1>
                        <h3>35 min</h3>
                    </div>
                </div>
                <div className="stat-block">
                    <div className="stat-row">
                        <div><img src={users[0]} alt="" /></div>
                        <div>
                            <h1>Anne Couture</h1>
                            <h3>5 min ago</h3>
                        </div>
                    </div>
                    <div className="stat-row-bottom">
                        <h1>Last order - </h1>
                        <h3>10 min ago</h3>
                    </div>
                    <div className="stat-row-bottom">
                        <h1>The most expensive order - </h1>
                        <h3> 0.012 ETH</h3>
                    </div>
                    <div className="stat-row-bottom">
                        <h1>The longest session - </h1>
                        <h3>35 min</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar