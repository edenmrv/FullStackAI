import { useState } from 'react'

// The two-way binding example from the lesson.
// value={text} binds the input to state, and onChange pushes the
// typed value back into state - so they always stay in sync.
const InputTest = () => {
  const [text, setText] = useState('')

  const updateText = (event) => {
    // the notes had setText(event.target) which stores the whole element -
    // we actually want the value the user typed
    setText(event.target.value)
  }

  const showText = () => {
    alert(text)
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Two Way Binding</h4>
      <div className="exercise" id="input-test">
        <input type="text" value={text} onChange={updateText} />
        <button onClick={showText}>Alert</button>
      </div>
    </div>
  )
}

export default InputTest
