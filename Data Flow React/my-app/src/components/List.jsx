import React from 'react'
import Contact from './Contact'

// Exercise 3 + 4
// gets the contacts array, and just passes the displayConvo callback further down
// to each Contact (the method travels Exercise2 -> List -> Contact).
export default function List(props) {
  return (
    <div className="list">
      {props.contacts.map((name) => (
        <Contact key={name} name={name} displayConvo={props.displayConvo} />
      ))}
    </div>
  )
}
