import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var message = this.props.data.contactmessage;
    }

    const styleWhite = { color: "white" };
    return (
      <section id="contact">
        <h2 style={styleWhite}>
          Interested in becoming a volunteer developer?
        </h2>
        <div className="row banner">
          <div className="banner-text">
            <div className="two columns header-col"></div>
            <div className="ten columns">
              <p className="gray">{message}</p>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfzsY9hhopa3cQlb2efHzK0ZTIPOAqtkN8H1ug9-BE3Otv4hQ/viewform"
                width="640"
                height="524"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
