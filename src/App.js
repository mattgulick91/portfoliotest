import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Error from './components/Error/Error'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" component={Landing} exact />
          <Route path="/" component={About} exact />
          <Route path="/" component={Projects} exact />
          <Route path="/" component={Contact} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
