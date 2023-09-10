import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const github = this.props.data.social?.find(soc => soc.name === "Github");
    const linkedin = this.props.data.social?.find(soc => soc.name === "LinkedIn");
    const name = this.props.data.name;
    const description = this.props.data.description;
    const profilepic = "images/profile-bg.JPG";

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
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
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Portfolio
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <img
              className="bg-picture"
              src={profilepic}
              alt="Viona Kaleb Profile Pic"
            />
            <Fade bottom>
              <h1 className="responsive-headline mt-10rem">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>- {description} -</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={github?.url} target="_blank" className="button btn github-btn" rel="noreferrer">
                  <i className={github?.className}></i>Github
                </a>
                <a href={linkedin?.url} target="_blank" className="button btn linkedin-btn" rel="noreferrer">
                  <i className={linkedin?.className}></i>LinkedIn
                </a>
              </ul>
            </Fade>
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
