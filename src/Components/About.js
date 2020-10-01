import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var icon = this.props.data.icon;
      var name = this.props.data.name;
      var about = this.props.data.about;
      var philosophy = this.props.data.philosophy;
      //var street = this.props.data.address.street;
      //var city = this.props.data.address.city;
      //var state = this.props.data.address.state;
      //var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="logo" src={require("../Data/" + icon)} alt="Icon" />
          </div>
          <div className="nine columns main-col">
            <h2>About Us</h2>
            <p>{about}</p>
             <h2>Philosophy</h2>
            <p>{philosophy}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  {/*}<span>{name}</span>
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}}
                  </span>
                  <br />{*/}
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
