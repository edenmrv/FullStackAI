import React from 'react'

// child - it has the data it needs (the quote) and the callback from the parent.
// when the button is clicked it calls the parent's method with this quote's id,
// so the parent knows which one to update.
export default function Quote(props) {
  const handleClick = () => {
    props.onClickEvent(props.quote.id)
  }

  return (
    <div>
      <div>{props.quote.text} : {props.quote.likes}</div>
      <button onClick={handleClick}>Like!</button>
    </div>
  )
}
