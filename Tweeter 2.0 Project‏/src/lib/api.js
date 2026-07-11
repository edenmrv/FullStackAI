const BASE_URL = 'https://lrazzxpwhdtmxcetgtng.supabase.co/rest/v1/Tweets'
const API_KEY = 'sb_publishable_PYoOQaHg4j7ps7Vo5Br41Q_QfmiyPSB'

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json'
}

export async function getTweets() {
  const res = await fetch(`${BASE_URL}?select=*&order=date.desc`, { headers })
  if (!res.ok) {
    throw new Error('Could not load tweets')
  }
  return res.json()
}

export async function postTweet(tweet) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { ...headers, Prefer: 'return=representation' },
    body: JSON.stringify(tweet)
  })
  if (!res.ok) {
    throw new Error('Could not add the tweet')
  }
  return res.json()
}
