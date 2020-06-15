import React, { Component } from "react";
import genericLogo from "../Data/genericlogo.png";

class Partnerships extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        return (
          <div key={projects.title} className="columns partnerships-item">
            <div className="item-wrap">
              <img alt={projects.title} src={genericLogo} />
            </div>
            <div
              className="partnerships-item-meta"
              style={{ textAlign: "center" }}
            >
              <h5>{projects.title}</h5>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="partnerships">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Current partnerships</h1>
            <div
              id="partnerships-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partnerships;
