import { observer } from 'mobx-react'

const Item = observer(({ item }) => {
  return (
    <div className="item">
      {item.name}
    </div>
  )
})

export default Item
