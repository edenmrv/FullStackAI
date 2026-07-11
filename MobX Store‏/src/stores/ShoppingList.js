import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'

export class ShoppingList {
  constructor() {
    this.list = []
    this.length = 0

    makeObservable(this, {
      list: observable,
      length: observable,
      addItem: action,
      checkItem: action,
    })
  }

  addItem = (name) => {
    this.list.push(new Item(name))
    this.length = this.list.length
  }

  checkItem = (name) => {
    const item = this.list.find(i => i.name === name)
    item.completed = !item.completed
  }
}
