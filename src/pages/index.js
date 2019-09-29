import React from "react";
// import Icon from "../components/Icon";
import linkedInlogo from "../images/linkedin-logo.png";
import gitHubLogo from "../images/github-logo.png";
import devToLogo from "../images/devto-logo.png";
import { useRouteData } from "react-static";
import moment from "moment";
import DevIcon from "devicon-react-svg";

export default function Intro() {
  let { userData } = useRouteData();
  const devIconStyle = {
    width: "75px",
    height: "75px"
  };
  return (
    <div className="intro" id="intro">
      <div className="intro__desc-section">
        <h1 className="intro__h1">Rob Peterman</h1>
        <h2 className="intro__h2">
          Full Stack JavaScript Developer{" "}
          <div className="intro__days-a-developer">
            (As of {moment().diff(userData.created_at, "days")} Days Ago)
          </div>
        </h2>
        <div className="intro__links">
          <a target="#" href="https://www.github.com/Robp773">
            <img className="express-icon" src={gitHubLogo} alt="GitHub Logo" />
          </a>
          <a target="#" href="https://www.linkedin.com/in/robertpeterman92">
            <img
              className="express-icon"
              src={linkedInlogo}
              alt="LinkedIn Logo"
            />
          </a>
          <a target="#" href="https://dev.to/robp773">
            <img className="express-icon" src={devToLogo} alt="Devto Logo" />
          </a>
        </div>

        <div className="intro__bio">{userData.bio}</div>
      </div>

      <div className="intro__border" />
      {/* <div className="intro__tech-section">
        <div className="intro__circle-container">
          <div className="icon__text">
            <DevIcon icon="mongodb"/>
            <div>MongoDB</div>
          </div>
          <div className="icon__text">
            <DevIcon icon="express" style={devIconStyle} />
            <div>Express</div>
          </div>
          <div className="icon__text">
            <DevIcon icon="react" style={devIconStyle} />
            <div>React</div>
          </div>
          <div className="icon__text">
            <DevIcon icon="nodejs" style={devIconStyle} />
            <div>Node.js</div>
          </div>
          <div className="icon__text">
            <DevIcon icon="sass" style={devIconStyle} />
            <div>SASS</div>
          </div>
          <div className="icon__text">
            <DevIcon icon="css3" style={devIconStyle} />
            <div>CSS3</div>
          </div>
          <div className="icon__text">
            <DevIcon icon="html5" style={devIconStyle} />
            <div>HTML5</div>
          </div>
          <div className="icon__text">
            <DevIcon icon="javascript" style={devIconStyle} />
            <div>All Things JavaScript</div>
          </div>
          <Icon iconName="express" name="Express" />
          <Icon iconName="react" name="React" />
          <Icon iconName="nodejs" name="Node.js" />
          <Icon iconName="sass" name="Syntactically Awesome Style Sheets" />
          <Icon iconName="css3" name="CSS3" />
          <Icon iconName="html5" name="HTML5" />
          <Icon iconName="javascript" name="All Things JavaScript" />
        </div>
      </div> */}
    </div>
  );
}
