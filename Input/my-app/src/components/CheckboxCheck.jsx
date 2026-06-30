import { useState } from 'react'

// Spot Check - same idea as the text input, but a checkbox doesn't
// have a "value" we care about, it has a checked state (true/false).
// So we bind to `checked` instead of `value`, and read event.target.checked.
const CheckboxCheck = () => {
  const [isChecked, setIsChecked] = useState(false)

  const updateChecked = (event) => {
    setIsChecked(event.target.checked)
    // log straight from the event so we see the fresh value,
    // since the state update hasn't gone through yet
    console.log(event.target.checked)
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check - Checkbox</h4>
      <div className="exercise" id="checkbox-check">
        <label>
          <input type="checkbox" checked={isChecked} onChange={updateChecked} />
          {isChecked ? ' checked' : ' unchecked'}
        </label>
      </div>
    </div>
  )
}

export default CheckboxCheck
