import { useState } from 'react'
import './App.css'
import Hudini from './components/Hudini'
import Landing from './components/Landing'
import Home from './components/Home'

// Spot Check 1
function SpotCheck1() {
  const logHover = () => {
    console.log('I was hovered!')
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot-check 1</h4>
      <div className="exercise" id="spotcheck-1">
        <button onMouseEnter={logHover}>Hover me</button>
      </div>
    </div>
  )
}

// Spot Check 2
function Company({ name, revenue }) {
  return (
    <div id={name}>
      {name} makes {revenue} every year
    </div>
  )
}

function SpotCheck2() {
  const companiesData = [
    { name: 'Tesla', revenue: 140 },
    { name: 'Microsoft', revenue: 300 },
    { name: 'Google', revenue: 600 },
  ]

  const [companies, setCompanies] = useState(companiesData)

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot-check 2</h4>
      <div className="exercise" id="spotcheck-2">
        {companies.map((company) => (
          <Company key={company.name} name={company.name} revenue={company.revenue} />
        ))}
      </div>
    </div>
  )
}

// Spot Check 3
function Calendar({ reservations }) {
  return (
    <div id="calendar">
      <h4>Calendar</h4>
      {reservations.map((r) => (
        <div key={r.name}>
          {r.name} has a reservation on {r.day} @ {r.time}
        </div>
      ))}
    </div>
  )
}

function Register({ reservations }) {
  return (
    <div id="register">
      <h4>You cannot reserve during these times:</h4>
      {reservations.map((r) => (
        <div key={r.name}>
          {r.day} @ {r.time}
        </div>
      ))}
    </div>
  )
}

function SpotCheck3() {
  const [reservations, setReservations] = useState([
    { day: 'Monday', time: 2000, name: 'Earl' },
    { day: 'Monday', time: 1845, name: 'Ella' },
    { day: 'Tuesday', time: 1930, name: 'Linda' },
    { day: 'Wednesday', time: 2015, name: 'Anni' },
  ])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot-check 3</h4>
      <div className="exercise" id="spotcheck-3">
        <Calendar reservations={reservations} />
        <Register reservations={reservations} />
      </div>
    </div>
  )
}

// Spot Check 4
function Hot() {
  return <div>I'm feeling too hot!</div>
}

function Cold() {
  return <div>It's too cold in here!</div>
}

function SpotCheck4() {
  const [temperature, setTemperature] = useState('hot')

  const toggleTemperature = () => {
    setTemperature(temperature === 'hot' ? 'cold' : 'hot')
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot-check 4</h4>
      <div className="exercise" id="spotcheck-4">
        {temperature === 'hot' ? <Hot /> : <Cold />}
        <button onClick={toggleTemperature}>Change Temp!</button>
      </div>
    </div>
  )
}

// Spot Check 5
function SpotCheck5() {
  const [likes, setLikes] = useState(0)

  const increaseLike = () => {
    setLikes(likes + 1)
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot-check 5</h4>
      <div className="exercise" id="spotcheck-5">
        <div>{likes}</div>
        <button onClick={increaseLike}>Like! 👍</button>
      </div>
    </div>
  )
}

// Exercise 2, 3 & 4
function Exercise2() {
  const [appData, setAppData] = useState({
    user: 'Robyn',
    store: [
      { item: 'XSPS Pro Player', price: 800, discount: 0.2, hottest: false },
      { item: 'Gizem Backwatch', price: 230, discount: 0.6, hottest: false },
      { item: 'Surround Sound Pelican', price: 3099, discount: 0.05, hottest: true },
    ],
    shouldDiscount: false,
    currentPage: 'Landing',
  })

  const goToPage = (page) => {
    const newData = { ...appData }
    newData.currentPage = page
    setAppData(newData)
  }

  const toggleDiscount = () => {
    const newData = { ...appData }
    newData.shouldDiscount = !appData.shouldDiscount
    setAppData(newData)
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2, 3 & 4</h4>
      <div className="exercise" id="ex-2">
        <button onClick={() => goToPage('Landing')}>Landing</button>
        <button onClick={() => goToPage('Home')}>Home</button>
        <button onClick={toggleDiscount}>Toggle Discount</button>
        <hr />
        {appData.currentPage === 'Landing' ? (
          <Landing user={appData.user} store={appData.store} />
        ) : (
          <Home store={appData.store} shouldDiscount={appData.shouldDiscount} />
        )}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <SpotCheck1 />
      <SpotCheck2 />
      <SpotCheck3 />
      <SpotCheck4 />
      <SpotCheck5 />
      <Hudini />
      <Exercise2 />
    </div>
  )
}

export default App
