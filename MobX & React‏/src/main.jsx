import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'mobx-react'
import { GeneralStore as generalStore } from './stores/GeneralStore'
import { RestaurantStore as restaurantStore } from './stores/RestaurantStore'

const GeneralStore = new generalStore()
const RestaurantStore = new restaurantStore()

const stores = {
  GeneralStore,
  RestaurantStore,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider {...stores}>
    <App />
  </Provider>
)
