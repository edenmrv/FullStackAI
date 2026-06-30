import { useState } from 'react'

function Hudini() {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <div>{show ? 'Now you see me' : "Now you don't"}</div>
        <button onClick={toggleShow}>Toggle</button>
      </div>
    </div>
  )
}

export default Hudini
