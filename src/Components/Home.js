import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import MeetTheTeam from "./MeetTheTeam";
//import Testimonials from "./Testimonials";
import Partnerships from "./Partnerships";
import Client from "./Client";
import data from "../Data/data.json";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header data={data.main} />
        <About data={data.main} />
        <MeetTheTeam data={data.team} />
        <Partnerships data={data.partnerships} />
        {/*<Testimonials data={data.testimonials} />*/}
        <Contact data={data.main} />
        <Client data={data.main} />
        <Footer data={data.main} />
      </div>
    );
  }
}

export default Home;