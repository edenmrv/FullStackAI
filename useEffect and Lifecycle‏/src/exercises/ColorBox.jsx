import { useEffect, useState } from 'react'

const getColors = async () => {
  return ['green', 'blue', 'pink', 'purple', 'gold', 'white']
}

function ColorBox() {
  const [colors, setColors] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const loadColors = async () => {
      const result = await getColors()
      setColors(result)
    }

    loadColors()
  }, [])

  useEffect(() => {
    if (colors.length === 0) return

    const timeoutId = setTimeout(() => {
      setIndex((prev) => (prev + 1) % colors.length)
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [index, colors])

  return (
    <div>
      <h1>Spot Check</h1>
      <div className="box" style={{ backgroundColor: colors[index] }}>
        {colors[index]}
      </div>
    </div>
  )
}

export default ColorBox
