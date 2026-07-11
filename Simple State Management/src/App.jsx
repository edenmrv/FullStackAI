import ShoppingCart from './exercises/ShoppingCart'
import ThemeDemo from './exercises/ThemeDemo'
import RegistrationWizard from './exercises/RegistrationWizard'

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

      <section className="exercise">
        <RegistrationWizard />
      </section>
    </div>
  )
}

export default App
