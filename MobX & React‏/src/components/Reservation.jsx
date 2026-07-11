import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

class Reservation extends Component {
  seat = () => {
    this.props.RestaurantStore.seatRes(this.props.res.id)
  }

  complete = () => {
    this.props.RestaurantStore.completeRes(this.props.res.id)
  }

  render() {
    const { res } = this.props
    return (
      <div className={res.completed ? 'conditional' : ''}>
        <span>{res.name}</span>
        <span> - {res.numPeople} people</span>
        <button onClick={this.seat}>Seat Reservation</button>
        <button onClick={this.complete}>Complete Reservation</button>
      </div>
    )
  }
}

export default inject('RestaurantStore')(observer(Reservation))
