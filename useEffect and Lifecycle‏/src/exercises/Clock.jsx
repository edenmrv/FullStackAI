import { useEffect, useState } from 'react'

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      <h1>Current Time</h1>
      <p className="clock">{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock
