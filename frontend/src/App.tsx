import './App.scss'
import Marketplace from './components/Marketplace/Marketplace'
import Profilebar from './components/Profilebar/Profilebar'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className="wrapper">
        <Sidebar />
    </div>
    <div className="wrapper">
      <Marketplace />
      <Profilebar />
    </div>
  )
}

export default App