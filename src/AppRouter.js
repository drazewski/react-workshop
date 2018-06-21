import React from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import App from './App'
import Home from './Home'
import './App.css';

function AppComponent() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
        <Route path="/home" component={Home}></Route>
        <Route path="/contacts" component={App}></Route>
      </div>
    </BrowserRouter>
  )
}
 
export default AppComponent
