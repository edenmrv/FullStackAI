import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput'
import Reservation from './Reservation'

class Restaurant extends Component {
  addRes = () => {
    const { GeneralStore, RestaurantStore } = this.props
    RestaurantStore.addRes(GeneralStore.name, GeneralStore.numPeople)
  }

  render() {
    const { RestaurantStore } = this.props
    return (
      <div>
        <div>You have {RestaurantStore.openTables} open tables</div>
        <div>{RestaurantStore.restPopulation} people in the restaurant</div>
        <div id="completedTables">{RestaurantStore.completedTables} completed tables</div>

        <ResInput />
        <button id="addRes" onClick={this.addRes}>Add Reservation</button>

        <div className="reservations">
          {RestaurantStore.reservations.map(res => (
            <Reservation key={res.id} res={res} />
          ))}
        </div>
      </div>
    )
  }
}

export default inject('GeneralStore', 'RestaurantStore')(observer(Restaurant))
