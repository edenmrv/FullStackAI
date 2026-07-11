import { useState } from 'react'
import { observer } from 'mobx-react'
import Item from './components/Item'

const App = observer(({ store }) => {
  const [newItem, setNewItem] = useState('')

  const addItem = () => {
    store.addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>

      <div className="add-row">
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          placeholder="Add an item..."
        />
        <button onClick={addItem}>Add</button>
      </div>

      <div className="list">
        {store.list.map(item => (
          <Item key={item.name} item={item} store={store} />
        ))}
      </div>
    </div>
  )
})

export default App
