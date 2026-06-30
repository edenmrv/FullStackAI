import React, { useState } from 'react'
import Quote from './Quote'

// parent - holds the state and the method that changes it.
// we pass the method DOWN as a prop (onClickEvent), and the child calls it BACK up.
export default function Quotes() {
  const [quotes, setQuotes] = useState([
    { id: 0, text: 'Live your life', likes: 0 },
    { id: 1, text: 'Time is of the essence', likes: 0 },
  ])

  const handleClick = (id) => {
    // build a new array, bump likes only on the matching quote
    const newQuotes = quotes.map((quote) => {
      if (quote.id === id) {
        return { ...quote, likes: quote.likes + 1 }
      }
      return quote
    })
    setQuotes(newQuotes)
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Data Flow Up - Quote Liker</h4>
      <div className="exercise" id="quotes">
        {/* pass the callback itself, NOT handleClick(quote.id) - that would fire on render */}
        {quotes.map((quote) => (
          <Quote key={quote.id} quote={quote} onClickEvent={handleClick} />
        ))}
      </div>
    </div>
  )
}
