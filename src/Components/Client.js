import React, { Component } from "react";

class Client extends Component {
  render() {
    if (this.props.data) {
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="client">
        <h2 style={{ color: "white", textAlign: "center" }}>
          Interested in working on a project with us?
        </h2>
        <div className="row banner">
          <p className="gray">{message}</p>
          <div className="google-form">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdU1zQjN2ANTLFCIptZ7hxq4swy4yP4MfTQ-xDe3ZJqzUiOxQ/viewform?usp=sf_link"
              title="googleform"
              width="640"
              height="524"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
}

export default Client;