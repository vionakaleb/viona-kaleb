import React, { Component } from "react";
import Zmage from "react-zmage";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        {/* <Fade left duration={1000} distance="40px"> */}
          <div className="row">
            <div className="twelve columns collapsed">
              <div style={{textAlign: "center", marginBottom: "2rem"}}>
                <h1 style={{marginBottom: "2rem"}}><i class="fa fa-folder-open"/> Some of My Works</h1>
                <a href={this.props.data.project} target="_blank" className="button btn github-btn" rel="noreferrer" style={{padding: "5px 20px", fontSize: "small"}}>
                  More Portfolio
                </a>
              </div>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        {/* </Fade> */}
      </section>
    );
  }
}

export default Portfolio;
