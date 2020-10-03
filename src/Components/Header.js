import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      //var name = this.props.data.name;
      var description = this.props.data.description;
      var whiteLogo = this.props.data.logo;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <a href="#home"><img className="headerLogo" src={require("../Data/" + whiteLogo)} alt="Logo" style={{ position: "fixed", left: "10%", maxWidth: "auto%", maxHeight: "8%" }} /></a>
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#meettheteam">
                Meet The Team
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#partnerships">
                Partnerships
              </a>
            </li>
            {/*<li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>*/}
            <li>
              <a className="smoothscroll" href="#volunteer">
                Volunteer
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline"><img className="logo" src={require("../Data/" + whiteLogo)} alt="Logo" style={{ maxWidth: "50%", height: "auto" }} /></h1>
            <h3 style={{ color: "#ddff73" }}>{description}</h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
