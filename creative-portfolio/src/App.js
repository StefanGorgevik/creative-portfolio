import React from 'react';
import './App.css';
import AboutMe from './containers/AboutMe/AboutMe.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AboutMe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
