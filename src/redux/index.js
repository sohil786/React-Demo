import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { USER_DETAILS } from '../common';

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

export const store = createStore(
  userReducer,
  composeWithDevTools(
    // applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

// export let store = createStore(userReducer)

// export const store = createStore(
//   userReducer, reducer,/* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

