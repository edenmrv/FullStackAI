import CategoryList from './CategoryList'

const Home = ({ categories }) => {
  return (
    <div className="home">
      <div id="home-background"></div>
      <div className="home-content">
        <h1>The Hogwarts Directory</h1>
        <p>Pick a category to browse.</p>
        <CategoryList categories={categories} />
      </div>
    </div>
  )
}

export default Home
