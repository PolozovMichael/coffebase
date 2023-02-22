import './Mainpage.scss'
const Mainpage = () => {
  return (
    <div className="mainpage-wrapper">
        <div className="searchbar">
            <input type="text" placeholder="Search here..."/>
        </div>
        <div className="banner">
            <h1>DISCOVER YOUR PASSION WITH COFFEE BASE</h1>
        </div>
        <div className="community">
            <h1 className="community-title">Explore Community</h1>
            <div className="community-row">
                <div className="community-card">
                    <div className="community-overlay">
                        <h1>Order, drink and enjoy</h1>
                        <h3>Explore the digital world with a cup of strong Americano V2.0#exx1..3</h3>
                    </div>
                </div>
                <div className="community-card">
                    <div className="community-overlay">
                        <h1>Order, drink and enjoy</h1>
                        <h3>Explore the digital world with a cup of strong Americano V2.0#exx1..3</h3>
                    </div>
                </div>
            </div>
            <h1 style={{marginTop: '20px'}} className="community-title">Trending news</h1>
            <div className="community-row">
                <div className="community-card">
                    <div className="community-overlay">
                        <h1>Order, drink and enjoy</h1>
                        <h3>Explore the digital world with a cup of strong Americano V2.0#exx1..3</h3>
                    </div>
                </div>
                <div className="community-card">
                    <div className="community-overlay">
                        <h1>Order, drink and enjoy</h1>
                        <h3>Explore the digital world with a cup of strong Americano V2.0#exx1..3</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mainpage