import React from "react";
import Icon from "./Icon";
import linkedInlogo from '../images/linkedin-logo.png'; // Tell Webpack this JS file uses this image
import gitHubLogo from '../images/github-logo.png'; // Tell Webpack this JS file uses this image


export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="intro" id='intro'>
        <div className="intro__desc-section">
          <h1 className="intro__h1"> Rob Peterman </h1>
          <h2 className="intro__h2"> Full Stack JavaScript Developer </h2>

          <div className="intro__links">     
            <a target="#" href="https://www.github.com/Robp773"><img src={gitHubLogo} alt="GitHub Logo"/></a>
            <a target="#" href="https://www.linkedin.com/in/robertpeterman92"><img src={linkedInlogo} alt="LinkedIn Logo"/></a>
          </div>

          <h3 className="intro__h3"> About Me </h3>

          <span> Specialization in the MERN stack </span>
          <span> Full Stack Thinkful Graduate </span>
          <span> BS in Homeland Security and Emergency Preparedness </span>
          <span> Based in Northern NJ </span>
        </div>

        <div className="intro__border" />
        <div className="intro__tech-section">
          <div className="intro__circle-container">
            <Icon iconName="mongodb" name="MongoDB" />
            <Icon iconName="express" name="Express" />
            <Icon iconName="react" name="React" />
            <Icon iconName="nodejs" name="Node.js" />
            <Icon iconName="sass" name="Syntactically Awesome Style Sheets" />
            <Icon iconName="css3" name="CSS3" />
            <Icon iconName="html5" name="HTML5" />
            <Icon iconName="wordpress" name="WordPress" />
            <Icon iconName="javascript" name="All Things JavaScript" />
          </div>
        </div>
      </div>
    );
  }
}
