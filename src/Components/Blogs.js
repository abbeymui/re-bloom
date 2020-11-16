import React, { Component } from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import Footer from "./Footer";
import data from "../Data/data.json";

class Blogs extends Component {
  render() {
    var whiteLogo = data.main.logo;

    if (data) {
      var blogs = data.blogs.blogs.map(function (blog) {
        return <Blog blog={blog} />;
      })
    }
    
    return(
      <div>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="/#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="/#home" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <a href="#home"><img className="headerLogo" src={require("../Data/" + whiteLogo)} alt="Logo" style={{ position: "fixed", left: "10%", maxWidth: "auto%", maxHeight: "8%" }} /></a>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="current">
              <Link to="/blogs">
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <section id="volunteer">
          <h1 className="blog-header" style={{ textAlign: "center", paddingTop: "100px", color: "white" }}>
            Our Blog
          </h1>
          <div className="row banner">
            {blogs}
          </div>
        </section>

        <Footer data={data.main} />
      </div>
    );
  }
}

export default Blogs;