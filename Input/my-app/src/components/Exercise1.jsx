import { useState } from 'react'

const Exercise1 = () => {
  const [person, setPerson] = useState({ name: '', age: '' })

  // one handler for both inputs - the property name comes in as an
  // argument and we use a computed key to update just that field
  const handleChange = (event, property) => {
    setPerson({ ...person, [property]: event.target.value })
  }

  // pulling both values from state, not from the DOM
  const goToBar = () => {
    alert(`Come in ${person.name}, you're ${person.age} - that's good enough`)
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input
          id="name-input"
          onChange={(e) => handleChange(e, 'name')}
          value={person.name}
        />
        <input
          id="age-input"
          onChange={(e) => handleChange(e, 'age')}
          value={person.age}
        />
        <button onClick={goToBar}>Go to Bar</button>
      </div>
    </div>
  )
}

export default Exercise1
