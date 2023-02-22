import './App.scss'
import Marketplace from './components/Marketplace/Marketplace'
import Profilebar from './components/Profilebar/Profilebar'

const App = () => {
  return (
    <div className="wrapper">
      <>
        <Marketplace />
        <Profilebar />
      </>
    </div>
  )
}

export default App