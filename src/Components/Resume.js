import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const { skillmessages: skillmessage } = this.props.data;

    const education = this.props.data.education.map((education) => {
      return (
        <div key={education.school} className="flex-row gap-2">
          <img
            className="icon-logo"
            src="images/campus.png"
            alt=""
          />
          <div className="flex-col">
            <h3 className="text-left">{education.school}</h3>
            <p className="info text-left">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p className="text-left">{education.description}</p>
          </div>
        </div>
      );
    });

    const work = this.props.data.work.map((work) => {
      return (
        <div key={work.company} className="mb-6">
          <div className="flex-row gap-2">
            <img
              className="icon-logo"
              src={"images/" + work.logo}
              alt={work.title}
            />
            <div className="flex-col">
              <h3 className="text-left">{work.company}</h3>
              <p className="info text-left">
                {work.title}
                <span>&bull;</span> <em className="date">{work.years}</em>
              </p>
            </div>
          </div>
          {work.description &&
            <p className="mb-1">
              {work.description}
            </p>
          }
          {work.descriptions && 
            <ul style={{listStyleType:"disc", marginLeft: "1.5rem"}} className="mb-2">
              {work.descriptions?.map(desc => 
                desc ? <li>{desc}</li> : <br />
              )}
            </ul>
          }
          {work.projects && 
            <>
              <p className="mb-1">Projects:</p>
              <ul style={{listStyleType:"circle", marginLeft: "1.5rem"}} className="mb-2">
                {work.projects?.map(desc => 
                  desc ? <li>{desc}</li> : <br />
                )}
              </ul>
            </>
          }
          {work.website &&
            <div className="mb-2">
              <i class="fa fa-link"/>{" "}<a href={work.website} target="_blank" rel="noreferrer">{work.website}</a>
            </div>
          }
          <div className="skill-container">
            {work?.skills?.map(skill =>
              <div class="skill-labels">
                ✔ {skill}
              </div>
            )}
          </div>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <i class="fa fa-briefcase"/> <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide right duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <i class="fa fa-book"/> <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <i class="fa fa-file"/> <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {skillmessage.length > 0 && 
                <div className="mb-3">
                  {skillmessage?.map(b => <p className="m-0">{b}</p>)}
                </div>
              }
              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
