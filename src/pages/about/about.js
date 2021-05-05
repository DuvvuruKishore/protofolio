import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import Profile1 from '../../pages/kishore3.jpg';
import './about.css';
import Button from "react-bootstrap/Button";

function about() {
    return (
        
           <Container>
           <div id='about'>
           <h1 className="me">ABOUT ME</h1>
           <hr/>
           <Row xs={12} md={6} className="image">
           <Image src={Profile1} roundedCircle className="rounded mx-auto d-block short"/>
           {/*<img src={Profile} class="rounded mx-auto d-block" />*/}
           </Row>
           <Row className="center">
           <h5 className="head">Hi ! I am Duvvuru Kishore</h5>
           <p>An enthusiastic fresher with high motivational skills having bachelors of engineering degree in electrical and electronics engineering .
           Infact Electrical degree does not stop me from learning programming .
           
           
           </p>
            <div>
           <a href="https://drive.google.com/file/d/1UV_gaUxLPlzCSZ91sh7gASzRFM46cBVc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
