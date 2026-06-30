function Landing({ user, store }) {
  const hottest = store.find((product) => product.hottest)

  return (
    <div>
      Welcome, {user}. The hottest item is {hottest.item} for ${hottest.price}
    </div>
  )
}

export default Landing
