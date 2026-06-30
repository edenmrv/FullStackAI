import Item from './Item'

function Home({ store, shouldDiscount }) {
  return (
    <div>
      <h4>Store</h4>
      {store.map((product) => (
        <Item
          key={product.item}
          item={product.item}
          price={product.price}
          discount={product.discount}
          shouldDiscount={shouldDiscount}
        />
      ))}
    </div>
  )
}

export default Home
