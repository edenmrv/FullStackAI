import React from 'react'

// Exercise 6 + 7
// gets the convo array + the name of the person we're talking to (sender prop).
// "self" messages show as "Me", everything else shows the other person's name.
export default function Conversation(props) {
  return (
    <div className="conversation">
      {props.convo.map((message, index) => (
        <div key={index}>
          <span className="sender">
            {message.sender === 'self' ? 'Me' : props.sender}
          </span>
          : "{message.text}"
        </div>
      ))}
      {/* sends displayConversation back to null so we return to the list */}
      <button className="back" onClick={props.goBack}>
        Back
      </button>
    </div>
  )
}
