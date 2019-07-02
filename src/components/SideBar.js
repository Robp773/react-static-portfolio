import React from "react";
import { Link } from "components/Router";
import menu from '../images/menu.png'

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(open) {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  render() {
    let navContent = (
      <div className="mobile-menu__expanded">
        <Link to="/">Home</Link>
        <Link to="/activity">Activity</Link>
        <Link to="/projects">Projects</Link>
      </div>
    );
    let hamburger = <button className='mobile-menu__button' onClick={this.handleToggle}><img src={menu}/></button>;
    return (
      <div onClick={this.handleToggle}
        className={`mobile-menu ${
          this.state.sidebarOpen
            ? "mobile-menu__expanded"
            : "mobile-menu__collapsed"
        }`}
      >
        <div className='mobile-menu__content'>{this.state.sidebarOpen ? navContent : hamburger}</div>
      </div>
    );
  }
}
