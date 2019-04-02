import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import GitHub from './components/GitHub/GitHub'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <GitHub />
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
