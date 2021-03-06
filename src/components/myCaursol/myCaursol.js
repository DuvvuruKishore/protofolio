import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide2 from '../../assests/caursol/slide2.webp';


import "./myCaursol.css";
import ScrollDown from '../scrolldown/Scrolldown';


function myCaursol() {
    return (
        <div id="home">
        <Carousel controls={false} indicators interval={2500} pause={false}>
        {/*<Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide1}
            alt="First slide"
          />
    
        </Carousel.Item>*/}
        <Carousel.Item>
        <img
          className="d-block w-100  custom-img"
          src={Slide2}
          alt="Second slide"
        />
    
        
        </Carousel.Item>
      {/*<Carousel.Item>
        <img
          className="d-block w-100  custom-img"
          src={Slide3}
          alt="Third slide"
        />
    
      
      </Carousel.Item>*/}
    
      </Carousel> 
      <ScrollDown/> 
        </div>
    )
}

export default myCaursol;
