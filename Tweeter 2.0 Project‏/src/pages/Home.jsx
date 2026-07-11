import CreateTweet from '../components/CreateTweet'
import TweetList from '../components/TweetList'
import { useTweets } from '../context/TweetsContext'

const Home = () => {
  const { loading, error } = useTweets()

  return (
    <div className="page">
      <CreateTweet />
      {error && <p className="page-error">{error}</p>}
      {loading ? <p className="loading">Loading tweets...</p> : <TweetList />}
    </div>
  )
}

export default Home
