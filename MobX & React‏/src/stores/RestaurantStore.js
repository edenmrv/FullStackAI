import { observable, computed, action, makeObservable } from 'mobx'
import { Reservation } from './ReservationStore'

export class RestaurantStore {
  constructor() {
    this.reservations = []
    this.numTables = 10

    makeObservable(this, {
      reservations: observable,
      numTables: observable,
      totalReservations: computed,
      openTables: computed,
      restPopulation: computed,
      completedTables: computed,
      addRes: action,
      seatRes: action,
      completeRes: action,
    })
  }

  get totalReservations() {
    return this.reservations.length
  }

  get openTables() {
    let counter = 0
    this.reservations.forEach(r => r.seated ? counter++ : null)
    return this.numTables - counter
  }

  get restPopulation() {
    // people who are seated but haven't left yet (not completed)
    let people = 0
    this.reservations.forEach(r => {
      if (r.seated && !r.completed) people += r.numPeople
    })
    return people
  }

  get completedTables() {
    return this.reservations.filter(r => r.completed).length
  }

  addRes = (name, numPeople) => {
    this.reservations.push(new Reservation(name, Number(numPeople)))
  }

  seatRes = (id) => {
    const res = this.reservations.find(r => r.id === id)
    res.seated = true
  }

  completeRes = (id) => {
    const res = this.reservations.find(r => r.id === id)
    res.completed = true
  }
}
