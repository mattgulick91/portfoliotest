import React, { Component } from 'react'

class GitHub extends Component {
  constructor(){
    super()
    this.state = {
      transX: 100
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleExit = this.handleExit.bind(this)
  }

  componentDidMount(){
    setTimeout(
      () => {
        this.setState({transX: 0})
      },
      300
    )
  }

  handleEnter(event){
    this.setState({transX: 10})
  }

  handleExit(event){
    this.setState({transX: 0})
  }

  render(){
    let xVar = this.state.transX
    let wrapSty = {transform: `translateX(${xVar}%)`, transition: 'all .2s ease-in-out'}
    return(
      <div onMouseEnter={this.handleEnter} onMouseLeave={this.handleExit} style={wrapSty} className="git-wrapper">
      <a href="http://www.github.com/mattgulick91" target="_blank">
      <img src={require('../../images/github.png')} alt="github image" />
      </a>
      </div>
    )
  }
}

export default GitHub
