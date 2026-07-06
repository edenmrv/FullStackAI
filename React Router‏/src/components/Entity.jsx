import { useParams, Link } from 'react-router-dom'

const Entity = ({ getCategoryData }) => {
  const { category, name } = useParams()
  const data = getCategoryData(category)
  const item = data ? data.find((el) => el.name === name) : null

  if (!item) {
    return (
      <div className="entity">
        <p>Couldn't find "{name}".</p>
        <Link to={`/wiki/${category}`}>Back</Link>
      </div>
    )
  }

  return (
    <div className="entity">
      <Link to={`/wiki/${category}`} className="back-link">
        &larr; back to {category}
      </Link>
      <h2>{item.name}</h2>
      <h4>{item.effect}</h4>
      <p>{item.description}</p>
    </div>
  )
}

export default Entity
