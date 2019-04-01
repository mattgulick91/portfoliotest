import React, {Component} from 'react'

class About extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <div className="about-container" id="about">
        <div className="left-container">
          <div className="about-left">
            <p>I have been working in and studying Front End Development for 2 years. I have built websites using multiple frameworks and languages and love to keep up to date with how those frameworks are changing every day.</p>
          </div>
        </div>
        <div className="frameworks-container">
          <div className="about-frameworks">
            <h1>Frameworks</h1>
            <hr />
              <h2>ReactJS</h2>
              <h2>JQuery</h2>
              <h2>AngularJS</h2>
              <h2>Bootstrap</h2>
              <h2>SASS</h2>
          </div>
        </div>
        <div className="language-container">
          <div className="about-languages">
            <h1>Languages</h1>
            <hr />
              <h2>Vanilla JavaScript</h2>
              <h2>PHP</h2>
              <h2>MySQL</h2>
              <h2>HTML 5</h2>
              <h2>CSS 3</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default About
