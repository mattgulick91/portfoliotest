import React, {Component} from 'react'
import {NavHashLink as NavLink} from 'react-router-hash-link'

class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      navImg: require('../../images/hamburger-menu.png'),
      isVisible: false,
      navHide: 'nav-content-hidden',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }

  handleClick(event) {
    this.state.isVisible ?
    this.setState({
      navImg: require('../../images/hamburger-menu.png'),
      navHide: 'nav-content-hidden',
      isVisible: false
    }) :
    this.setState({
      navImg: require('../../images/hamburger-menu-x.png'),
      navHide: 'nav-content',
      isVisible: true
    })
  }

  handleLeave(event){
    this.setState({
      navImg: require('../../images/hamburger-menu.png'),
      navHide: 'nav-content-hidden',
      isVisible: false
    })
  }

  render(){
    return(
      <div className="collapsible-nav">

        <div className="nav-img-container">
          <input type="checkbox" id="nav" />
          <label for="nav">
          <img className="nav-img" onClick={this.handleClick} src={this.state.navImg} alt="nav-menu"/>
          </label>
        </div>
        <nav onMouseLeave={this.handleLeave} className={this.state.navHide}>
          <ul className="nav-list">
            <li><NavLink className="nav-links" smooth to="/#about">ABOUT</NavLink></li>
            <li><NavLink className="nav-links" smooth to="/#projects">PROJECTS</NavLink></li>
            <li><NavLink className="nav-links" smooth to ="/#contact">CONTACT</NavLink></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
