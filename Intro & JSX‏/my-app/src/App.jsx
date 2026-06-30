import './App.css'

// Spot Check 1
function SpotCheck1() {
  const getStuff = () => "Wild function'ed text"

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot-check 1</h4>
      <div className="exercise" id="spotcheck-1">
        <h1>Stuff: {getStuff()}</h1>
      </div>
    </div>
  )
}

// Spot Check 2 - morning/evening greeting picked with a ternary
function SpotCheck2() {
  const getMorningGreeting = () => <div>Good Morning</div>
  const getEveningGreeting = () => <div>Good Evening</div>

  const hour = new Date().getHours()

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot-check 2</h4>
      <div className="exercise" id="spotcheck-2">
        {hour < 12 ? getMorningGreeting() : getEveningGreeting()}
      </div>
    </div>
  )
}

// Spot Check 3 - returning an array of JSX
function SpotCheck3() {
  const getMorningGreeting = () => <div key="morning">Good Morning</div>
  const getEveningGreeting = () => <div key="evening">Good Evening</div>

  return [
    <h4 className="ex-title" key="title">Spot-check 3</h4>,
    getMorningGreeting(),
    getEveningGreeting(),
    <p key="text">some text</p>,
  ]
}

// Exercise 1
function Exercise1() {
  const showCompany = (name, revenue) => (
    <div id={name} key={name}>
      {name} makes {revenue} every year
    </div>
  )

  const companies = [
    { name: 'Tesla', revenue: 140 },
    { name: 'Microsoft', revenue: 300 },
    { name: 'Google', revenue: 600 },
  ]

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {companies.map((company) => showCompany(company.name, company.revenue))}
      </div>
    </div>
  )
}

// Exercise 2
function Exercise2() {
  const getClassName = (temperature) => {
    if (temperature < 15) return 'freezing'
    if (temperature <= 30) return 'fair'
    return 'hell-scape'
  }

  const temperature = 22

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id="weatherBox" className={getClassName(temperature)}></div>
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
      <Exercise1 />
      <Exercise2 />
    </div>
  )
}

export default App
