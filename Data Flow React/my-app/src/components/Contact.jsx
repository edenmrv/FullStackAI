import React from 'react'

// Exercise 4 + 5
// renders a contact's name, and on click calls back up to open that conversation.
// it has the name, so it can tell the parent which convo to show.
export default function Contact(props) {
  const handleClick = () => {
    props.displayConvo(props.name)
  }

  return (
    <div className="contact" onClick={handleClick}>
      {props.name}
    </div>
  )
}
