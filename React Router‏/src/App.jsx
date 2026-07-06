import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CATEGORIES, POTIONS_DATA, CHARMS_DATA } from './data'
import HogwartNavbar from './components/HogwartNavbar'
import Home from './components/Home'
import Entities from './components/Entities'
import Entity from './components/Entity'
import './App.css'

const App = () => {
  const [categories, setCategories] = useState(CATEGORIES)
  const [potions, setPotions] = useState(POTIONS_DATA)
  const [charms, setCharms] = useState(CHARMS_DATA)

  const STATE_MAP = {
    potions: potions,
    charms: charms
  }

  const getCategoryData = (category) => {
    return STATE_MAP[category]
  }

  return (
    <BrowserRouter>
      <div className="App">
        <HogwartNavbar />
      </div>
      <Routes>
        <Route path="/" element={<Home categories={categories} />} />
        <Route
          path="/wiki/:category"
          element={<Entities getCategoryData={getCategoryData} />}
        />
        <Route
          path="/wiki/:category/:name"
          element={<Entity getCategoryData={getCategoryData} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
