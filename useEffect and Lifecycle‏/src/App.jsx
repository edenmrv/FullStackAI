import Clock from './exercises/Clock'
import ColorBox from './exercises/ColorBox'
import Posts from './exercises/Posts'

function App() {
  return (
    <div className="app">
      <section className="exercise">
        <Clock />
      </section>

      <section className="exercise">
        <ColorBox />
      </section>

      <section className="exercise">
        <Posts />
      </section>
    </div>
  )
}

export default App
