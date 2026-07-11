import { useEffect, useState } from 'react'
import CreateTweet from './components/CreateTweet'
import TweetList from './components/TweetList'
import { loadTweets, saveTweets } from './lib/storage'
import { USERNAME } from './lib/constants'
import './App.css'

const App = () => {
  const [tweets, setTweets] = useState(() => loadTweets())

  // keep the tweets in localStorage so a refresh doesn't wipe them
  useEffect(() => {
    saveTweets(tweets)
  }, [tweets])

  const addTweet = (content) => {
    const newTweet = {
      id: Date.now(),
      userName: USERNAME,
      content,
      date: new Date().toISOString()
    }
    setTweets((current) => [newTweet, ...current])
  }

  return (
    <div className="page">
      <CreateTweet onCreate={addTweet} />
      <TweetList tweets={tweets} />
    </div>
  )
}

export default App
