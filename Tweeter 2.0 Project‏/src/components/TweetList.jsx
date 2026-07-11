import Tweet from './Tweet'

const TweetList = ({ tweets }) => {
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
