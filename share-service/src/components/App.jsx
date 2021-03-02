import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.scss'
import Header from './Header/index'
import Footer from './Footer/index'
import Home from './MainContent/Home'
import Dashboard from './MainContent/Dashboard'
import Profile from './MainContent/Profile'
import NoPageFound from './NoPageFound/index.jsx'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route component={NoPageFound} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  )
}
