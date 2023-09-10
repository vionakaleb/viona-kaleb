import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const { 
      fullname, 
      bios, 
      bios2, 
      bios3, 
      address: {
        street,
        city,
        country, 
        gmaps,
        // state,
        // zip,
      }, 
      // phone,
    } = this.props.data;

    const profilepic = "images/" + this.props.data.image;
    const email = this.props.data.social?.find(soc => soc.name === "Email")?.url;
    const linkedin = this.props.data.social?.find(soc => soc.name === "LinkedIn")?.url;
    // const resumeDownload = this.props.data.social?.find(soc => soc.name === "Behance")?.url;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Viona Kaleb Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2><i class="fa fa-user"/> About Me</h2>
              {bios && 
                <div>
                  {bios?.map(b => <p className="m-0">{b}</p>)}
                </div>
              }
              {bios2 && 
                <div className="mt-2">
                  {bios2?.map(b => <p className="m-0">{b}</p>)}
                </div>
              }
              {bios3 && 
                <div className="mt-2">
                  {bios3?.map(b => <p className="m-0">{b}</p>)}
                </div>
              }
              <div className="row mt-3">
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
