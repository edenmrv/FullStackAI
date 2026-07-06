import { Link } from 'react-router-dom'

const HogwartNavbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        Hogwarts Directory
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/wiki/charms">Charms</Link>
        <Link to="/wiki/potions">Potions</Link>
      </div>
    </nav>
  )
}

export default HogwartNavbar
