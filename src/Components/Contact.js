import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>        
          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
		  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeoKjpBpz5Wq8aTRxoUqoOmmbj3Ly6wqwp0YlvwlaKyqLJ25w/viewform?embedded=true" width="640" height="524" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

        </div>
		
      </section>
    );
  }
}

export default Contact;
