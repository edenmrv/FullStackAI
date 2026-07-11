import { observer } from 'mobx-react'

const Item = observer(({ item, store }) => {
  const checkItem = () => {
    store.checkItem(item.name)
  }

  const editItem = () => {
    const newLocation = prompt(`Where can you find ${item.name}?`, item.location)
    if (newLocation) {
      store.editItem(item.name, newLocation)
    }
  }

  return (
    <div className={item.completed ? 'item crossed' : 'item'}>
      <input type="checkbox" checked={item.completed} onChange={checkItem} />
      <span className="name">{item.name}</span>
      <span className="location">{item.location}</span>
      <button className="editButton" onClick={editItem}>Edit</button>
    </div>
  )
})

export default Item
