import { observer } from 'mobx-react'

const Item = observer(({ item, store }) => {
  const checkItem = () => {
    store.checkItem(item.name)
  }

  return (
    <div className={item.completed ? 'item crossed' : 'item'}>
      <input type="checkbox" checked={item.completed} onChange={checkItem} />
      {item.name}
    </div>
  )
})

export default Item
