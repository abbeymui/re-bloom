import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <h2 style={{ color: "white", textAlign: "center" }}>
          Interested in becoming a volunteer developer?
        </h2>
        <div className="row banner">
          <p className="gray">{message}</p>
          <div className="google-form">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSczPFNHc54e4WYn8OtAPN4f8gVVRpX3RuCCwN4vg6xbHxkUdg/viewform"
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

export default Contact;
