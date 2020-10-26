import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

class Blog extends Component {
  render() {
    return (
      <a href={this.props.blog.link} target="_blank" rel="noopener noreferrer">
        <Card className="blog-card">
          <Card.Body className="flex-container">
            <Card.Img src={require("../Data/" + this.props.blog.image)} className="blog-image flex-child-left"></Card.Img>
            <div className="flex-child-right">
              <Card.Title><h2 className="blog-title">{this.props.blog.title}</h2></Card.Title>
              <Card.Text className="blog-text">
                <p>{this.props.blog.text}</p>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </a>
    );
  }
}

export default Blog;
