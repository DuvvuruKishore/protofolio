import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../components/mynavbar.css';

function mynavbar() {
    return (
      <div>
      <Navbar fixed="top" 
      variant="dark"
      expand="md"
      className="animate-navbar nav-theme justify-content-between"
    >

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">skills</Nav.Link>
      <Nav.Link href="#project">project</Nav.Link>
      <Nav.Link href="#contact">contact</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    </div>

    )
}

export default mynavbar;
