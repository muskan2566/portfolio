import React from 'react'
import Home from './components/Home';
import Project from './components/Project';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/project" component={Project}/>
        </Switch>
      </Router>
    </>
  )
}


export default App
