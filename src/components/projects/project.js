import React from 'react'
import Card from 'react-bootstrap/Card';
import './project.css';
import Accordion from 'react-bootstrap/Accordion'
import Image from "react-bootstrap/Image";
import './project.css';

import L_CSS3 from "../../assests/skills/css3.svg";
import L_REACT from "../../assests/skills/react.svg";
import L_MATERIALUI from "../../assests/skills/material-ui-1.svg";
import BIGSALE from '../projects/bigsale.png';
import UNI from '../projects/uni.jpg';
import MOVIE from '../projects/movie.jpg';
import OXYGEN from './oxygen.jpg';
import WHATSAPP from './whatsapp.jpg';
import TINDER from './tinder.jpg';
import L_NODE_JS from "../../assests/skills/nodejs.svg";
import L_EXPRESS from "../../assests/skills/express.svg";
import L_MONGODB from "../../assests/skills/mongodb.svg";
import L_REACT_BOOTSTRAP from "../../assests/skills/react-bootstrap.svg"




/*import L_REDUX from "../../assests/skills/redux.svg";
import Button from 'react-bootstrap/Button';
import L_BOOTSTRAP from "../../assests/skills/bootstrap-4.svg"
import L_REACT_BOOTSTRAP from "../../assests/skills/react-bootstrap.svg";
import L_JAVASCRIPT from "../../assests/skills/javascript.svg";*/


function project() {
    return (
    <div >
        <div id="project">
        <h1 className="pt-3 text-center ">PROJECTS</h1>
        <hr/>
        
        <div className="d-flex justify-content-center flex-row mt-1">
    
              <div className="focus changeWidth">
            
              <Accordion>
              <Card style={{ width: '350px' }} className="card h-200 ">
              <Card.Img variant="top" src={BIGSALE} className="img"/>
              {/*<Card.Body titleTypographyProps={{variant:'h3' }}>Project title:Social Man Kind</Card.Body>
              <Card.Body>
              <h6>project title  :  social man kind</h6>
               </Card.Body>*/}
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
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="NODEJS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node Js
                            </span>
                          </li>
                          <li>
                          <span className="p-2">
                            <Image
                              src={L_EXPRESS}
                              alt="Express"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Express
                          </span>
                        </li>
                        <li>
                        <span className="p-2">
                          <Image
                            src={L_MONGODB}
                            alt="MongoDb"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          MongoDb
                        </span>
                      </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      view project source
                    </Accordion.Toggle>

                    <Accordion.Collapse>
                    <Card.Body className="space">
                    
                    <a href="https://confident-shaw-9da624.netlify.app/" class="btn btn-primary btn-xs active button1" role="button" aria-pressed="true">github</a>
                    
                    <a href="https://github.com/DuvvuruKishore/projectone" class="btn btn-primary btn-xs active button2" role="button" aria-pressed="true">webview</a>
                    </Card.Body>
                    </Accordion.Collapse>
                    </Card>
                   
                    </Accordion>
                
              

              </div>

              <div className="focus">
              <Accordion>
              <Card style={{ width: '350px' }} className="card h-200">
              <Card.Img variant="top" src={MOVIE} className="img"/>
              {/*<Card.Body titleTypographyProps={{variant:'h3' }}>Project title:Social Man Kind</Card.Body>
              <Card.Body>
              <h6>project title  :  social man kind</h6>
               </Card.Body>*/}
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
                            src={L_REACT}
                            alt="React"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          React
                        </span>
                      </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                           <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>

                          <li>
                          <span className="p-2">
                            <Image
                              src={L_NODE_JS}
                              alt="NODEJS"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Node Js
                          </span>
                        </li>
                        <li>
                        <span className="p-2">
                          <Image
                            src={L_EXPRESS}
                            alt="Express"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          Express
                        </span>
                      </li>
                      <li>
                      <span className="p-2">
                        <Image
                          src={L_MONGODB}
                          alt="MongoDb"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        MongoDb
                      </span>
                    </li>
                       
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    
                    <Card.Body className="space">
                    <a href="https://github.com/DuvvuruKishore/moviebooking" class="btn btn-secondary btn-xs active button2" role="button" aria-pressed="true">webview</a>
                    
                    <a href="https://jolly-banach-029f0e.netlify.app/" class="btn btn-secondary btn-xs active button1" role="button" aria-pressed="true">github</a>
                    
                    </Card.Body>

                    </Card>
                   
                    </Accordion>
                
              </div>

              <div className="focus">
              <Accordion>
              <Card style={{ width: '16rem' }} className="card h-200">
              <Card.Img variant="top" src={OXYGEN} className="img"/>
              
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>oxygen suppliers with your request
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
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                           
                              
                            </span>
                            Material-Ui
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    
                    <Card.Body>
                    <Card.Link href="https://github.com/DuvvuruKishore/oxygen" target="_blank">github</Card.Link>
                    <Card.Link href="https://wizardly-colden-10389c.netlify.app/" target="_blank">webview</Card.Link>
                    </Card.Body>
                    </Card>
                   
                    </Accordion>
                
              </div>
              </div>

          
                  </div>
                  
       <div className="down">
        <div className="d-flex justify-content-center flex-row mt-1 ">
              <div className="focus changeWidth">
            
              <Accordion>
              <Card style={{ width: '16rem' }} className="card h-200 ">
              <Card.Img variant="top" src={WHATSAPP} className="img"/>
              <Card.Body>
              <h6>project title  :  social man kind</h6>
               </Card.Body>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>a simple chat room like whatsapp
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
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                           
                              
                            </span>
                            Material-Ui
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="NODEJS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node Js
                            </span>
                          </li>
                          <li>
                          <span className="p-2">
                            <Image
                              src={L_EXPRESS}
                              alt="Express"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Express
                          </span>
                        </li>
                        <li>
                        <span className="p-2">
                          <Image
                            src={L_MONGODB}
                            alt="MongoDb"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          MongoDb
                        </span>
                      </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    
                    <Card.Body>
                    <Card.Link href="https://github.com/DuvvuruKishore/whatsapp" target="_blank">github</Card.Link>
                    <Card.Link href="https://awesome-lumiere-25be3d.netlify.app/" target="_blank">webview</Card.Link>
                    </Card.Body>
                    </Card>
                   
                    </Accordion>
                
              

              </div>

              <div className="focus">
              <Accordion>
              <Card style={{ width: '16rem' }} className="card h-200">
              <Card.Img variant="top" src={TINDER} className="img"/>
              <Card.Body>
              <h6>project title  :  social man kind</h6>
               </Card.Body>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>photos swipe option similar to tinder 
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
                            src={L_REACT}
                            alt="React"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          React
                        </span>
                      </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                           <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>

                          <li>
                          <span className="p-2">
                            <Image
                              src={L_NODE_JS}
                              alt="NODEJS"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Node Js
                          </span>
                        </li>
                        <li>
                        <span className="p-2">
                          <Image
                            src={L_EXPRESS}
                            alt="Express"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          Express
                        </span>
                      </li>
                      <li>
                      <span className="p-2">
                        <Image
                          src={L_MONGODB}
                          alt="MongoDb"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        MongoDb
                      </span>
                    </li>
                       
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    
                    <Card.Body>
                    <Card.Link href="https://github.com/DuvvuruKishore/tinder" target="_blank">github</Card.Link>
                    <Card.Link href="https://blissful-raman-c366f7.netlify.app/" target="_blank">webview</Card.Link>
                    </Card.Body>
                    </Card>
                   
                    </Accordion>
                
              </div>

              <div className="focus">
              <Accordion>
              <Card style={{ width: '16rem' }} className="card h-200">
              <Card.Img variant="top" src={UNI} className="img"/>
              
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Top University and their detail information with images
                        <hr />
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
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_BOOTSTRAP}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                           
                              
                            </span>
                            React-Bootstrap
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    
                    <Card.Body>
                    <Card.Link href="https://github.com/DuvvuruKishore/Uni" target="_blank">github</Card.Link>
                    <Card.Link href="https://unruffled-lalande-0df8ab.netlify.app/" target="_blank">webview</Card.Link>
                    </Card.Body>
                    </Card>
                   
                    </Accordion>
                
              </div>

              </div>
            </div>   
     </div>
              
        
    )
}

export default project
