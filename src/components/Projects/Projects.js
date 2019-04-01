import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Projects extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    let takeHeartPic = '../../images/takeHeartPictures.png'
    return(
      <div id="projects">
        <div className="projects-container">
          <div className="projects-title">
            <h1>Recent Projects</h1>
          </div>
          <div className="projects-text">
            <p>Here are a couple of projects I have worked on for clients.  Feel free to click on the cards and check out the websites yourself!</p>
          </div>
        </div>
        <div className="projects-card-container">
            <div className="projects-left">
              <a href="http://www.takeheartlifestyle.com" target="_blank">
                  <h1>Take Heart Lifestyle</h1>
                  <hr />
                  <div>
                  <img src={require('../../images/takeHeartPictures.png')} alt="take heart webpage"/>
                  </div>
                  <h3>A lifestyle blog that uses mainly PHP and MySQL to function.</h3>
                  <hr />
                  <h2 style={{color: '#34393F',}}>Some functionalities include:</h2>
                  <hr />
                  <p>A system for the owner to log in and maintain the website that allows the owner to create new blogs, new products and upload photography on their own</p>
                  <p>Uses SQL queries to pull data from database and iterates over that data to print cards to pages</p>
                  <p>A subscription box that adds subscribers email to database and automatically emails them a thank you note</p>
                  <p>Dynamic photography page that uses some JavaScript to function</p>
                  <p>Responsive design that fits all screen sizes (Bootstrap)</p><br />
                </a>
              </div>
          <div className="projects-right">
            <a href="http://www.sproutzmusic.com" target="_blank">
              <h1>Sproutz Music</h1>
              <hr />
              <img src={require('../../images/sproutzPictures.png')} alt="sproutz music webpage"/>
              <h3>An online store that functions on a little bit of Javascript and PHP</h3>
              <hr />
              <h2 style={{color: '#34393F'}}>Some functionalities include:</h2>
              <hr />
              <p>A login system for the owner to upload their own songs and images to the website</p>
              <p>Custom play buttons that use JavaScript to detect when other buttons are playing and forces them to stop</p>
              <p>Custom "Buy" buttons that direct the user to a PayPal checkout that then redirects back to a success page once the purchase is complete</p>
              <p>A mailer that sends the purchaser the song once they have made their payment</p>
              <p>Responsive design that works on all screen sizes</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
