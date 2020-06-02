import React, { Component } from "react";
// import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.css"

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <li
            // src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          >Back to Top</li>
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}