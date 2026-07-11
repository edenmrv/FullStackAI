const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <div className="tweet-head">
        <span className="tweet-user">{tweet.userName}</span>
        <span className="tweet-date">{tweet.date}</span>
      </div>
      <p className="tweet-content">{tweet.content}</p>
    </div>
  )
}

export default Tweet
