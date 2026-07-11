import { ThemeProvider, useTheme } from './ThemeContext'

const fontSizes = { small: '14px', medium: '16px', large: '20px' }

function ThemeDemo() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  )
}

function Layout() {
  const { theme } = useTheme()
  const bgColor = theme === 'light' ? '#ffffff' : '#1a1a1a'
  const color = theme === 'light' ? '#000000' : '#ffffff'

  return (
    <div style={{ backgroundColor: bgColor, color, padding: '20px', borderRadius: '8px' }}>
      <Header />
      <Content />
    </div>
  )
}

function Header() {
  return (
    <header style={{ marginBottom: '20px' }}>
      <Navigation />
      <Controls />
    </header>
  )
}

function Navigation() {
  const { fontSize } = useTheme()

  return (
    <nav style={{ fontSize: fontSizes[fontSize], marginBottom: '10px' }}>
      <a href="#home">Home</a> | <a href="#about">About</a> | <a href="#contact">Contact</a>
    </nav>
  )
}

function Controls() {
  return (
    <div>
      <ThemeToggle />
      <FontControl />
    </div>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}

function FontControl() {
  const { fontSize, setFontSize } = useTheme()

  return (
    <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  )
}

function Content() {
  const { fontSize } = useTheme()

  return (
    <main style={{ fontSize: fontSizes[fontSize] }}>
      <Article />
      <Sidebar />
    </main>
  )
}

function Article() {
  const { theme } = useTheme()

  return (
    <article>
      <h1>Article Title</h1>
      <p>This content uses the {theme} theme. No theme props are passed anywhere &mdash; every component reads it from context.</p>
    </article>
  )
}

function Sidebar() {
  const { theme } = useTheme()

  return (
    <aside style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>Sidebar</h3>
      <p>Current theme: {theme}</p>
    </aside>
  )
}

export default ThemeDemo
