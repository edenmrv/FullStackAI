import Tweet from './Tweet'
import { useTweets } from '../context/TweetsContext'

const TweetList = () => {
  const { tweets } = useTweets()

  // newest first
  const sorted = [...tweets].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="tweet-list">
      {sorted.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  )
}

export default TweetList
