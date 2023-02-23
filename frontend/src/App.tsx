import './App.scss'
import Marketplace from './components/Marketplace/Marketplace'
import Profilebar from './components/Profilebar/Profilebar'
import Sidebar from './components/Sidebar/Sidebar'
import Mainpage from './components/Mainpage/Mainpage'
import Settings from './components/Settings/Settings'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={
            <>
              <Sidebar />
              <Mainpage />
              <Profilebar />
            </>
        }/>
        <Route path="/marketplace" element={
            <>
              <Sidebar />
              <Marketplace />
              <Profilebar />
            </>
        }/>
        <Route path="/settings" element={
            <>
              <Sidebar />
              <Settings />
              <Profilebar />
            </>
        }/>
        <Route path="/faq" element={
            <>
              <Sidebar />
              faq
              <Profilebar />
            </>
        }/>
      </Routes>
    </div>
  )
}

export default App