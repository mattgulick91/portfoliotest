import React, {Component} from 'react'

class Landing extends Component {
  constructor(){
    super()
    this.state = {
      translateOneVal: -100,
      translateTwoVal: 50,
      translateThreeVal: -100,
      translateFourVal: 100,
      translateFiveVal: -100
    }
  }

// have elements translate in once component mounts
  componentDidMount(){
    setTimeout(
      () => {
        this.setState({translateOneVal: 0})
      },
      0
    )
    setTimeout(
      () => {
        this.setState({translateTwoVal: 0})
      },
      200
    )
    setTimeout(
      () => {
        this.setState({translateThreeVal: 0})
      },
      400
    )
    setTimeout(
      () => {
        this.setState({translateFourVal: 0})
      },
      600
    )
    setTimeout(
      () => {
        this.setState({translateFiveVal: 0})
      },
      2000
    )
  }

  render(){
    let oneSty = {
      transform: `translateX(${this.state.translateOneVal}em)`,
      transition: 'all 2s ease-in-out'
    }
    let twoSty = {
      transform: `translateX(${this.state.translateTwoVal}em)`,
      transition: 'all 2s ease-in-out'
    }
    let threeSty = {
      transform: `translateX(${this.state.translateThreeVal}em)`,
      transition: 'all 2s ease-in-out'
    }
    let fourSty = {
      transform: `translateX(${this.state.translateFourVal}em)`,
      transition: 'all 2s ease-in-out'
    }
    let fiveSty = {
      transform: `translateY(${this.state.translateFiveVal}%)`,
      transition: 'all 2s ease-in-out'
    }
    return(
      <div>
        <div className="header-title">
          <div className="header-top">
            <h4 style={oneSty}>My name is &nbsp;</h4><br/><br />
            <h1 style={twoSty}>Matthew Gulick...</h1><br/>
          </div>
          <div className="header-bottom">
            <h3 style={threeSty}>...and I am a </h3>
            <h2 style={fourSty}>&nbsp; Front-End Web Developer.</h2>
          </div>
        </div>
        <div style={fiveSty} className="so-what-container">
          <h1>What can I do?</h1>
        </div>
      </div>
    )
  }
}

export default Landing
