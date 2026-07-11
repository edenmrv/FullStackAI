import { USERNAME } from './constants'

const KEY = 'tweeter-username'

export function loadUsername() {
  return localStorage.getItem(KEY) || USERNAME
}

export function saveUsername(name) {
  localStorage.setItem(KEY, name)
}
