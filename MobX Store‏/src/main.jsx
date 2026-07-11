import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Item } from './stores/Item'
import { ShoppingList } from './stores/ShoppingList'

const groceryList = new ShoppingList()
groceryList.list.push(new Item('Potatoes'))
groceryList.list.push(new Item('Corn'))
groceryList.list.push(new Item('Sombreros'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App store={groceryList} />
  </React.StrictMode>
)
