import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Login from './auth/login/login';
import About from './about/about';
import Home from './home/home';
import Registration from './auth/registration/registration';
import UserList from './user/userList';

const routing = (
  <Router>
    <Route path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/registration" component={Registration} />
    <Route path="/user-list" component={UserList} />

    <Route path="/about" component={About} />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));