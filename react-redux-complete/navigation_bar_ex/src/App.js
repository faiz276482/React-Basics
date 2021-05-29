import React from 'react'
import NavBar from './components/NavBar'
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
