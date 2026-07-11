import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  // Read saved preferences on first render, fall back to defaults.
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [fontSize, setFontSize] = useState(() => localStorage.getItem('fontSize') || 'medium')

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize)
  }, [fontSize])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, fontSize, setFontSize }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used inside a ThemeProvider')
  }
  return context
}
