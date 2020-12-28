import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="volunteer">
        <h2 style={{ color: "white", textAlign: "center" }}>
          Interested in becoming a volunteer developer?
        </h2>
        <div className="row banner">
          <p className="gray">{message}</p>
          <div className="google-form">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSecEZ7ujjK9elGve4Yr24hcKGoAf4BWtYSAhEK9amkz0X4PsA/viewform"
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
