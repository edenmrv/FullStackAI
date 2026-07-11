import { useEffect, useState } from 'react'
import CreateTweet from '../components/CreateTweet'
import TweetList from '../components/TweetList'
import { getTweets, postTweet } from '../lib/api'
import { loadUsername } from '../lib/user'

const Home = () => {
  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(true)
  const [posting, setPosting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    getTweets()
      .then((data) => setTweets(data))
      .catch(() => setError('Could not load tweets'))
      .finally(() => setLoading(false))
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
      await postTweet(newTweet)
      const data = await getTweets()
      setTweets(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setPosting(false)
    }
  }

  return (
    <div className="page">
      <CreateTweet onCreate={addTweet} posting={posting} />
      {error && <p className="page-error">{error}</p>}
      {loading ? <p className="loading">Loading tweets...</p> : <TweetList tweets={tweets} />}
    </div>
  )
}

export default Home
