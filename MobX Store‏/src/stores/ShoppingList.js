import { observable, action, makeObservable } from 'mobx'

export class ShoppingList {
  constructor() {
    this.list = []
    this.length = 0

    makeObservable(this, {
      list: observable,
      length: observable,
      checkItem: action,
    })
  }

  checkItem = (name) => {
    const item = this.list.find(i => i.name === name)
    item.completed = !item.completed
  }
}
