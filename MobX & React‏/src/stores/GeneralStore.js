import { observable, action, makeObservable } from 'mobx'

export class GeneralStore {
  constructor() {
    this.name = ''
    this.numPeople = 0

    makeObservable(this, {
      name: observable,
      numPeople: observable,
      handleInput: action,
    })
  }

  handleInput = (name, value) => {
    this[name] = value
  }
}
