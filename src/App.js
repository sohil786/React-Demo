import React from 'react'
import Footer from './layout/footer/footer'
import Header from './layout/header/header'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/home';
import { USER_DETAILS, USER_SERVICE_URL } from './common';
import { store } from './redux';

class App extends React.Component {

  constructor() {
    super()
    if (window.localStorage['auth_token']) this.getProfile();
  }
  render() {
    return (
      <div>
        <Header></Header>
      </div>
    )
  }

  getProfile() {
    const res = fetch(`${USER_SERVICE_URL}/profile`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Token ' + window.localStorage['auth_token'],
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("Profile", responseJson);
        if (responseJson.success) {
          // window.localStorage['auth_token'] = responseJson?.data?.Token;
          store.dispatch({ type: USER_DETAILS, value: responseJson?.data, key: USER_DETAILS })
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
export default App