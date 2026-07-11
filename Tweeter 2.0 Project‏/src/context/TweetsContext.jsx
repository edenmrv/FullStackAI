import { createContext, useContext, useEffect, useState } from 'react'
import { getTweets, postTweet } from '../lib/api'
import { loadUsername } from '../lib/user'

const TweetsContext = createContext()

export const useTweets = () => useContext(TweetsContext)

export const TweetsProvider = ({ children }) => {
  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(true)
  const [posting, setPosting] = useState(false)
  const [error, setError] = useState('')

  const refresh = () => {
    return getTweets()
      .then((data) => setTweets(data))
      .catch(() => setError('Could not load tweets'))
  }

  // first load + poll the server every few seconds so we catch tweets
  // other people added while we were on the page
  useEffect(() => {
    refresh().finally(() => setLoading(false))

    const interval = setInterval(refresh, 5000)
    return () => clearInterval(interval)
  }, [])

  const addTweet = async (content) => {
    setError('')
    setPosting(true)
    try {
      const newTweet = {
        userName: loadUsername(),
        content,
        date: new Date().toISOString()
      }
      const created = await postTweet(newTweet)
      // just push it to the list we already have, no full refresh
      const tweet = Array.isArray(created) ? created[0] : created
      setTweets((current) => [tweet, ...current])
    } catch (err) {
      setError(err.message)
    } finally {
      setPosting(false)
    }
  }

  return (
    <TweetsContext.Provider value={{ tweets, loading, posting, error, addTweet }}>
      {children}
    </TweetsContext.Provider>
  )
}
