import './App.scss'
import Marketplace from './components/Marketplace/Marketplace'
import Profilebar from './components/Profilebar/Profilebar'
import Sidebar from './components/Sidebar/Sidebar'
import Mainpage from './components/Mainpage/Mainpage'

const App = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <Marketplace />
      <Profilebar />
      
    </div>
  )
}

export default App