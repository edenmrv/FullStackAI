import { useState } from 'react'

function App({ store }) {
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
    </div>
  )
}

export default App
