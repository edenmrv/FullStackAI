import { Link } from 'react-router-dom'

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <Link key={category} to={`/wiki/${category}`} className="category-card">
          {category}
        </Link>
      ))}
    </div>
  )
}

export default CategoryList
