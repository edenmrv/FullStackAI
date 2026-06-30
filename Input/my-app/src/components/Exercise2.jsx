import { useState } from 'react'

const Exercise2 = () => {
  const [name, setName] = useState('')
  const [fruit, setFruit] = useState('')

  const pickFruit = (event) => {
    const chosen = event.target.value
    setFruit(chosen)
    // setFruit is async, so `fruit` from state would still be the old value here.
    // name is already settled in state, but the fresh fruit comes from the event.
    console.log(`${name} selected ${chosen}`)
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <input
          id="name-input"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <select id="select-input" onChange={pickFruit} value={fruit}>
          <option value="">-- pick a fruit --</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="mango">Mango</option>
          <option value="grape">Grape</option>
        </select>
      </div>
    </div>
  )
}

export default Exercise2
