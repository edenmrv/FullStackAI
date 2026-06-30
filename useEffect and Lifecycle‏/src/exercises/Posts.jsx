import { useEffect, useState } from 'react'
import Post from '../Post'

function Posts() {
  const [posts, setPosts] = useState([])
  const [isNarrow, setIsNarrow] = useState(window.innerWidth < 700)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      setPosts(data.slice(0, 10))
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsNarrow(window.innerWidth < 700)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <h1>Top Posts</h1>

      <div className={isNarrow ? 'posts column' : 'posts'}>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  )
}

export default Posts
