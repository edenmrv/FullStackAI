import { useReducer } from 'react'

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
}

// total and itemCount are always derived from the items list,
// so they can never drift out of sync.
function summarize(items) {
  return {
    items,
    total: items.reduce((sum, item) => sum + item.price, 0),
    itemCount: items.length,
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = { ...action.data, id: Date.now() }
      return summarize([...state.items, newItem])
    }
    case 'REMOVE_ITEM': {
      const exists = state.items.some(item => item.id === action.data)
      if (!exists) return state // removing something that isn't there is a no-op
      return summarize(state.items.filter(item => item.id !== action.data))
    }
    case 'CLEAR_CART':
      return initialState
    default:
      return state
  }
}

const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 },
]

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <div>
      <h2 className="cart-summary">
        Shopping Cart ({state.itemCount} items) - Total: ${state.total}
      </h2>

      <div className="shop">
        {products.map(product => (
          <button
            key={product.name}
            onClick={() => dispatch({ type: 'ADD_ITEM', data: product })}
          >
            Add {product.name} (${product.price})
          </button>
        ))}
      </div>

      <ul className="cart-list">
        {state.items.map(item => (
          <li key={item.id}>
            <span>
              {item.name} - ${item.price}
            </span>
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', data: item.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      {state.items.length > 0 && (
        <button className="clear-btn" onClick={() => dispatch({ type: 'CLEAR_CART' })}>
          Clear Cart
        </button>
      )}
    </div>
  )
}

export default ShoppingCart
