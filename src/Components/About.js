import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const fullname = this.props.data.fullname;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const country = this.props.data.address.country;
    const gmaps = this.props.data.address.gmaps;
    const email = this.props.data.email;
    const linkedin = this.props.data.linkedin;
    // const state = this.props.data.address.state;
    // const zip = this.props.data.address.zip;
    // const phone = this.props.data.phone;
    // const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Viona Z. A. Kaleb Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2><i class="fa fa-user"/> About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2><i class="fa fa-info-circle" aria-hidden="true"/> Contact Details</h2>
                  <p className="address">
                      <span>
                        <a href={linkedin} target="_blank" rel="noreferrer" style={{cursor: "pointer"}}>
                          {fullname}
                        </a>
                      </span>
                    <br />
                    <span>
                      <a href={gmaps} target="_blank" rel="noreferrer" style={{cursor: "pointer"}}>
                        {street && <>{street}<br /></>}
                        {city}, {country}
                      </a>
                    </span>
                    <br />
                    {/* <span>{phone}</span>
                    <br /> */}
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a onClick={() => window.open(`mailto:${email}`)} style={{cursor: "pointer"}}>{email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
