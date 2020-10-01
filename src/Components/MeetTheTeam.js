import React, { Component } from "react";

class MeetTheTeam extends Component {
  render() {
    if (this.props.data) {
      var members = this.props.data.members.map(function (member) {
        return (
          <div key={member.name} className="columns meettheteam-item">
            <div className="item-wrap">
              <a href={member.url} title={member.name}>
                <img
                  alt={member.name}
                  src={require("../Data/" + member.image)}
                  style={{
                    objectFit: "cover",
                    width: "250px",
                    height: "250px"
                  }}
                />
                <div className="overlay">
                  <div className="portfolio-item-meta"></div>
                </div>
                {member.urlType === "linkedin" && (
                  <div className="link-icon">
                    <i className="fa fa-linkedin"></i>
                  </div>
                )}
                {member.urlType === "personal" && (
                  <div className="link-icon">
                    <i className="fa fa-link"></i>
                  </div>
                )}
              </a>
            </div>
            <div
              className="meettheteam-item-meta"
              style={{ textAlign: "center" }}
            >
              <h5 style={{ marginBottom: "5px" }}>{member.name}</h5>
              <div style={{ fontSize: 12, color: "black" }}>
                {member.school} Class of {member.gradYear}
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="meettheteam">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Meet The Team</h1>
            <div
              id="meettheteam-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {members}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MeetTheTeam;