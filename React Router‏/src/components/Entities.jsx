import { useParams, Link } from 'react-router-dom'

const Entities = ({ getCategoryData }) => {
  const { category } = useParams()
  const data = getCategoryData(category)

  if (!data) {
    return (
      <div className="entities">
        <h2>Nothing here</h2>
        <p>There is no category called "{category}".</p>
      </div>
    )
  }

  return (
    <div className="entities">
      <h2>{category}</h2>
      <div className="entity-list">
        {data.map((item) => (
          <Link
            key={item.name}
            to={`/wiki/${category}/${item.name}`}
            className="entity-card"
          >
            <h3>{item.name}</h3>
            <span>{item.effect}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Entities
