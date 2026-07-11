import ShoppingCart from './exercises/ShoppingCart'
import ThemeDemo from './exercises/ThemeDemo'

function App() {
  return (
    <div className="app">
      <h1>Simple State Management</h1>

      <section className="exercise">
        <ShoppingCart />
      </section>

      <section className="exercise">
        <ThemeDemo />
      </section>
    </div>
  )
}

export default App
