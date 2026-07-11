import { observable, makeObservable } from 'mobx'

export class ShoppingList {
  constructor() {
    this.list = []
    this.length = 0

    makeObservable(this, {
      list: observable,
      length: observable,
    })
  }
}
