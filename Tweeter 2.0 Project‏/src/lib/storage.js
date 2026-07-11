const STORAGE_KEY = 'tweeter-tweets'

// a couple of tweets so the list isn't empty on the first run
const seedTweets = [
  {
    id: 1,
    userName: 'yonatan',
    content:
      'On the technical side, Microsoft says the Xbox Series X can handle 4K visuals at 60 frames per second, and potentially up to 120FPS.',
    date: '2019-12-15T14:40:58.340Z'
  },
  {
    id: 2,
    userName: 'yonatan',
    content: 'hello there',
    date: '2019-12-15T14:40:11.083Z'
  },
  {
    id: 3,
    userName: 'yonatan',
    content: 'another tweet text',
    date: '2019-12-14T10:12:00.000Z'
  }
]

export function loadTweets() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    return JSON.parse(saved)
  }
  // first time - save the seed so it stays after refresh
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seedTweets))
  return seedTweets
}

export function saveTweets(tweets) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tweets))
}
