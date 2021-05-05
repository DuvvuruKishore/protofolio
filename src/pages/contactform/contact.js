import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:duvvurukishore100@gmail.com" target="Gmail" rel="noopener noreferrer">
                <Button variant="outline-danger" title="duvvurukishore100@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/duvvuru-kishore-0979aa135" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
  </div>
            
            
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
export default ContactForm;