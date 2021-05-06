import React from 'react';
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import Fade from 'react-reveal/Fade';

import './App.css';
import MyNav from './components/mynavbar';
import Coursol from './components/myCaursol/myCaursol';
import Title from './components/title_message/title_message';
import About from './pages/about/about';
import Profile from './assests/parallax/background.webp';
import Skills from './pages/skills/skills';
import Project from './components/projects/project1'
import ContactForm from './pages/contactform/contact';
import FooterPanel from './components/footer/footer';


const App=() =>{
  return (
    <div className="App">
    <div >
    <MyNav/>
    <Coursol/>
    <Title/>
  </div>

    <div>

    {/*<Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={require("./assests/parallax/background.webp")}
      bgImageAlt=""
      strength={-200}
    >*/}
   <Parallax blur={10} bgImage={Profile} strength={200}>
        

      <Container className="container-box rounded">
          <Fade duration={500}>
            <About />
          </Fade>
        </Container>
  
    </Parallax>
  </div>
  <div>
  <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Skills />
        </Fade>
      </Container>
      </div>
      <div>
     <Parallax blur={10} bgImage={Profile} strength={200}>
        

      <Container className="container-box rounded">
          <Fade duration={500}>
          
            <Project/>
          </Fade>
        </Container>
  
  </Parallax>
  </div>
  <div>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      </div>
      <hr />
      <FooterPanel />
  </div>
  );
}

export default App;
