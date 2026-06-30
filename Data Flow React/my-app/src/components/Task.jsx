import React from 'react'

// child - shows the text and a Complete button that calls back up to the parent
export default function Task(props) {
  return (
    <div className="task">
      <span>{props.text}</span>
      <button className="complete" onClick={props.onComplete}>
        Complete
      </button>
    </div>
  )
}
