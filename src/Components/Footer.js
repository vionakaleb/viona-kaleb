import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    // const networks = this.props.data.social.map((network) => {
    //   return (
    //     <li key={network.name}>
    //       <a href={network.url}>
    //         <i className={network.className}></i>
    //       </a>
    //     </li>
    //   );
    // });

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              {/* <ul className="social-links">{networks}</ul> */}

              <ul className="copyright">
                <li className="copyright-name">&copy; Viona Zatil Aqmar Kaleb</li>
                <li>
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
