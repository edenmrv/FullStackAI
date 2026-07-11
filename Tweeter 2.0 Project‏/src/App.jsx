import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { TweetsProvider } from './context/TweetsContext'
import './App.css'

const App = () => {
  return (
    <HashRouter>
      <TweetsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </TweetsProvider>
    </HashRouter>
  )
}

export default App
