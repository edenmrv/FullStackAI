import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput'

class Restaurant extends Component {
  render() {
    return (
      <div>
        <span>You have {this.props.RestaurantStore.openTables} open tables</span>
        <ResInput />
        <button id="addRes">Add Reservation</button>
        <div className="reservations"></div>
      </div>
    )
  }
}

export default inject('GeneralStore', 'RestaurantStore')(observer(Restaurant))
