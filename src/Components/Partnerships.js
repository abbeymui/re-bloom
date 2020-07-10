import React, { Component } from "react";

class Partnerships extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (project) {
        return (
          <div key={project.title} className="columns partnerships-item">
            <div className="item-wrap">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  alt={project.title}
                  src={require("../Data/" + project.image)}
                  style={{ objectFit: "cover" }}
                />
                <div className="overlay">
                  <div className="portfolio-item-meta"></div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
            <div
              className="partnerships-item-meta"
              style={{ textAlign: "center" }}
            >
              {<h5>{project.title}</h5>}
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
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
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
