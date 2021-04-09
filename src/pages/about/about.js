import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Profile from '../../pages/kishore.jpg';
import './about.css';
import Button from "react-bootstrap/Button";

function about() {
    return (
        
           <Container>
           <div id='about'>
           <h1 className="me">ABOUT ME</h1>
           <hr/>
           <Row xs={12} md={6} className="image">
           <Image src={Profile} roundedCircle className="rounded mx-auto d-block"/>
           {/*<img src={Profile} class="rounded mx-auto d-block" />*/}
           </Row>
           <Row className="center">
           <p>The third way to center an image horizontally is by using display: flex. 
           Just like we used the text-align property for a container, we use display: flex for a container as well
           </p>
            <div>
           <a href="https://www.linkedin.com/in/duvvuru-kishore-0979aa135" target="_blank" rel="noopener noreferrer">
           <Button className="m-2" variant="outline-primary">
               My Resume
             </Button>
            
            <a href="https://www.linkedin.com/in/duvvuru-kishore-0979aa135" target="_blank" rel="noopener noreferrer">
            <Button className="m-2" variant="outline-info">
            LinkedIn
            </Button>
            </a>
            

           </a>
         </div>
           </Row>
           </div>
           </Container>
        
    )
}

export default about
