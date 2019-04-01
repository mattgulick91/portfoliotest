import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Contact extends Component {
  constructor(){
    super()
    this.state = {
      scalePar: 0
    }
    this.handleEnter = this.handleEnter.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }

  handleEnter(event){
    this.setState({
      scalePar: 1
    })
  }

  handleLeave(event){
    this.setState({
      scalePar: 0
    })
  }


  render(){
    let hrSty = {width: '80%', transition: 'all .2s ease-in-out', transform: `scaleX(${this.state.scalePar})`}
    return(
      <div className="contact-container" id="contact">
        <div className="contact-title">
          <h2>If you are interested in hiring me or just have any questions in general, please feel free to contact me:
          </h2>
        </div>
        <div className="mailer-hr-wrap">
        <hr style={hrSty} className="mailer-hr" />
        <a href="mailto:mattgulick91@gmail.com" className="contact-link">
        <img onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} className="mailer-icon" src={require('../../images/mailIcon.png')} alt="mail icon" />
        </a>
        <hr style={hrSty} className="mailer-hr" />
        </div>
      </div>
    )
  }
}

export default Contact
