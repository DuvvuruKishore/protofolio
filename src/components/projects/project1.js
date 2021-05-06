import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Card from 'react-bootstrap/Card';
import './project1.css';
import Accordion from 'react-bootstrap/Accordion'
import Image from "react-bootstrap/Image";


import L_CSS3 from "../../assests/skills/css3.svg";
import L_REACT from "../../assests/skills/react.svg";
import L_MATERIALUI from "../../assests/skills/material-ui-1.svg";
import ECOMMERECE from '../projects/ecommerece.png';
import UNI from '../projects/uni.jpg';
import MOVIE from '../projects/movie.jpg';
import OXYGEN from './oxygen.jpg';
import WHATSAPP from './whatsapp.jpg';
import TINDER from './tinder.jpg';
import L_NODE_JS from "../../assests/skills/nodejs.svg";
import L_EXPRESS from "../../assests/skills/express.svg";
import L_MONGODB from "../../assests/skills/mongodb.svg";
import L_REACT_BOOTSTRAP from "../../assests/skills/react-bootstrap.svg"




const TimeLine = () => {
  return (
    <div id="project">
    <h1 className="pt-3 text-center ">PROJECTS</h1>
        <hr/>
       
        <Timeline> 
        <Events>
       

          
          {/* Project: Get GitHub Info */}
          <ImageEvent
          
            text="simple Ecommerece website"
            className="text-center"
            src={ECOMMERECE}
            alt="simple ecommerece website"
            
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Simple Ecommerce website listing the offer products on a bigsale
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                        <li>we can view each individual product</li>
                        <li>we can add to the cart</li>
                        <li>Responsive Design</li>
    
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="css"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              css
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_BOOTSTRAP}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              R-bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GitHub API
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Mongodb
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
              <UrlButton
              href="https://github.com/DuvvuruKishore/projectone"
              target="_blank"
            >
              SOURCE CODE
            </UrlButton>
           
                <UrlButton
                  href="https://confident-shaw-9da624.netlify.app/"
                  target="_blank"
                >
                  WEBVIEW
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


          <ImageEvent
          className="text-center"
          text="movie booking"
          src={MOVIE}
          alt="movie booking"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    PROJECT DETAILS
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> Movie booking app with signIn and signUp form 
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                      <li>we can signIn and signUp</li>
                      <li>Powered by React ,Material UI</li>
                      <li>Respoisive Design</li> 
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                      <li>
                      <span className="p-2">
                        <Image
                          src={L_CSS3}
                          alt="css"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        css
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_REACT}
                          alt="CSS 3"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        React
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_REACT_BOOTSTRAP}
                          alt="React"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        R-bootstrap
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_EXPRESS}
                          alt="Github API"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        GitHub API
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_NODE_JS}
                          alt="Github API"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        Node js
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_MONGODB}
                          alt="Github API"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        Mongodb
                      </span>
                    </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href="https://github.com/DuvvuruKishore/moviebooking"
                target="_blank"
              >
                Source Code
              </UrlButton>
              <UrlButton
                href="https://github.com/akjha96/getGithubInfo"
                target="_blank"
              >
                web View
              </UrlButton>
              
            </div>
          </div>
        </ImageEvent>


        <ImageEvent
        className="text-center"
        text="Oxygen suppliers"
        src={OXYGEN}
        alt="Get GitHub Info"
      >
        <div className="d-flex justify-content-between flex-column mt-1">
          <div>
            <Accordion>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className="p-2 text-center accordian-main"
                >
                  PROJECT DETAILS
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0" className="text-left">
                  <Card.Body>
                    <strong>Description:</strong> oxygen suppliers with your request
                    <hr />
                    <strong>Features:</strong>
                    <ul className="list-styles pt-1">
                    <li>By filling the form, request is made</li>
                    <li>we can view the request as well</li>
                 
                    </ul>
                    <hr />
                    <strong>Tech used:</strong>
                    <ul>
                    <li>
                    <span className="p-2">
                      <Image
                        src={L_CSS3}
                        alt="css"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      css
                    </span>
                  </li>
                  <li>
                    <span className="p-2">
                      <Image
                        src={L_REACT}
                        alt="CSS 3"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      React
                    </span>
                  </li>
                  <li>
                    <span className="p-2">
                      <Image
                        src={L_MATERIALUI}
                        alt="React"
                        rounded
                        className="image-style1 m-1"
                      ></Image>{" "}
                    Material-Ui
                    </span>
                  </li>
                  <li>
                    <span className="p-2">
                      <Image
                        src={L_EXPRESS}
                        alt="Github API"
                        rounded
                        className="image-style1 m-1"
                      ></Image>{" "}
                      GitHub API
                    </span>
                  </li>
                  <li>
                    <span className="p-2">
                      <Image
                        src={L_NODE_JS}
                        alt="Github API"
                        rounded
                        className="image-style1 m-1"
                      ></Image>{" "}
                      Node js
                    </span>
                  </li>
                  <li>
                    <span className="p-2">
                      <Image
                        src={L_MONGODB}
                        alt="Github API"
                        rounded
                        className="image-style1 m-1"
                      ></Image>{" "}
                      Mongodb
                    </span>
                  </li>
                    </ul>
                  </Card.Body>  
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="d-flex justify-content-between flex-nowrap text-center">
            <UrlButton
              href="https://github.com/DuvvuruKishore/oxygen"
              target="_blank"
            >
              Source Code
            </UrlButton>
            <UrlButton
              href="https://wizardly-colden-10389c.netlify.app/"
              target="_blank"
            >
              Web View
            </UrlButton>
               </div>
        </div>
      </ImageEvent>

          {/* Project: Smart Brain */}
          <ImageEvent
        
            className="text-center"
            text="WhatsappClone"
            src={WHATSAPP}
            alt="whatsapp Clone"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> a simple chat room like whatsapp
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                        <li>we can chat in the chat room</li>
                        <li>material-ui is used for clean look</li>
                       
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                        <span className="p-2">
                          <Image
                            src={L_CSS3}
                            alt="css"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          css
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_REACT}
                            alt="CSS 3"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          React
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_MATERIALUI}
                            alt="React"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                        Material-Ui
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_EXPRESS}
                            alt="Github API"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          GitHub API
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_NODE_JS}
                            alt="Github API"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          Node js
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_MONGODB}
                            alt="Github API"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          Mongodb
                        </span>
                      </li>
                       
                        </ul>
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/DuvvuruKishore/whatsapp"
                  target="_blank"
                >
                  Source Code
                </UrlButton>
                <UrlButton
                  href="https://awesome-lumiere-25be3d.netlify.app/"
                  target="_blank"
                >
                  Web View
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: RoboFriends */}

          <ImageEvent
            
            className="text-center"
            text="TinderClone"
            src={TINDER}
            alt="TinderClone"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> photos swipe option similar to tinder
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                        <li>we get the data from backend</li>
                        <li>and we can swipe the photos to see other photos</li>
                         
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                        <span className="p-2">
                          <Image
                            src={L_CSS3}
                            alt="css"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          css
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_REACT}
                            alt="CSS 3"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          React
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_MATERIALUI}
                            alt="React"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                        Material-Ui
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_EXPRESS}
                            alt="Github API"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          GitHub API
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_NODE_JS}
                            alt="Github API"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          Node js
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_MONGODB}
                            alt="Github API"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          Mongodb
                        </span>
                      </li>
                       
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/DuvvuruKishore/tinder"
                  target="_blank"
                >
                  Source Code
                </UrlButton>
                <UrlButton
                  href="https://blissful-raman-c366f7.netlify.app/"
                  target="_blank"
                >
                  Web View
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Product_Hunt_Clone */}

          <ImageEvent
            className="text-center"
            text="Top Universities"
            src={UNI}
            alt=""
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Top University and their detail information with images                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                        <li>University details</li>
                        <li>Powered by React and React-Bootstrap</li>
                    
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              css
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_BOOTSTRAP}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/DuvvuruKishore/Uni"
                  target="_blank"
                >
                  Source Code
                </UrlButton>
                <UrlButton
                  href="https://unruffled-lalande-0df8ab.netlify.app/"
                  target="_blank"
                >
                  Web View
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          
        </Events>
        
        </Timeline>
      
    </div>
  );
};

export default TimeLine;
