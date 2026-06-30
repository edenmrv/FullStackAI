import React, { useState } from 'react'
import List from './List'
import Conversation from './Conversation'

// Exercise 2 - 7 : the conversation app.
// Exercise2 is the parent that owns the state and decides what to show.
const Exercise2 = () => {
  const [data, setData] = useState({
    displayConversation: null,
    conversations: [
      {
        with: 'Laura',
        convo: [
          { text: 'Hi', sender: 'self' },
          { text: 'You there?', sender: 'self' },
          { text: "Yeah, hi, what's up?", sender: 'other' },
        ],
      },
      {
        with: 'Dad',
        convo: [
          { text: 'Have you finished your school work yet?', sender: 'other' },
          { text: 'Yes.', sender: 'self' },
          { text: 'What do you mean, yes?', sender: 'other' },
          { text: '??', sender: 'self' },
        ],
      },
      {
        with: 'Shoobert',
        convo: [
          { text: 'Shoobert!!!', sender: 'self' },
          { text: 'Dude!!!!!!!!', sender: 'other' },
          { text: 'Shooooooooo BERT!', sender: 'self' },
          { text: "You're my best friend", sender: 'other' },
          { text: "No, *you're* my best friend", sender: 'self' },
        ],
      },
    ],
  })

  // Exercise 5 - set which conversation to show (by contact name)
  const displayConvo = (name) => {
    setData({ ...data, displayConversation: name })
  }

  // Exercise 7 - back to the contact list
  const goBack = () => {
    setData({ ...data, displayConversation: null })
  }

  // Exercise 3 - pull only the names out of the conversations array
  const contacts = data.conversations.map((conversation) => conversation.with)

  // find the conversation that matches the one we want to display
  const current = data.conversations.find(
    (conversation) => conversation.with === data.displayConversation
  )

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2-7 - Conversation App</h4>
      <div className="exercise" id="ex-2">
        {data.displayConversation === null ? (
          <List contacts={contacts} displayConvo={displayConvo} />
        ) : (
          <Conversation
            convo={current.convo}
            sender={data.displayConversation}
            goBack={goBack}
          />
        )}
      </div>
    </div>
  )
}

export default Exercise2
