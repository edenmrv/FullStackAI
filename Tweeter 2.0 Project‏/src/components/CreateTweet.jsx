import { useState } from 'react'
import { MAX_CHARS } from '../lib/constants'
import { useTweets } from '../context/TweetsContext'

const CreateTweet = () => {
  const { addTweet, posting } = useTweets()
  const [text, setText] = useState('')

  const tooLong = text.length > MAX_CHARS
  const isEmpty = text.trim().length === 0

  const handleSubmit = () => {
    if (tooLong || isEmpty || posting) return
    addTweet(text.trim())
    setText('')
  }

  return (
    <div className="create-tweet">
      <textarea
        className="create-input"
        placeholder="What you have in mind..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={posting}
      />
      <div className="create-bottom">
        {tooLong && (
          <span className="error-msg">The tweet can't contain more then 140 chars.</span>
        )}
        <button
          className="tweet-btn"
          onClick={handleSubmit}
          disabled={tooLong || isEmpty || posting}
        >
          {posting ? 'Posting...' : 'Tweet'}
        </button>
      </div>
    </div>
  )
}

export default CreateTweet
