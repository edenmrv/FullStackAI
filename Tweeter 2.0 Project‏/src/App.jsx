import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { TweetsProvider } from './context/TweetsContext'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <TweetsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </TweetsProvider>
    </BrowserRouter>
  )
}

export default App
