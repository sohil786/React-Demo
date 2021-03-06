import { createStore } from 'redux'
import {  USER_DETAILS } from '../common';

function userReducer(state = { value: 0 }, action) {
  console.log("action", action);
  switch (action.type) {
    case USER_DETAILS: {
      return { [action.key]: action.value }
    }
    default:
      return state
  }
}


// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export let store = createStore(userReducer)


