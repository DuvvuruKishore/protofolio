import React from 'react'
import Card from 'react-bootstrap/Card';
import './project.css';
import Accordion from 'react-bootstrap/Accordion'
import Image from "react-bootstrap/Image";
import '../projects/project.css';
import L_HTML5 from "../../assests/skills/html-5.svg";
import L_CSS3 from "../../assests/skills/css3.svg";
import L_REACT from "../../assests/skills/react.svg";
import L_MATERIALUI from "../../assests/skills/material-ui-1.svg";
import REACTTODO from '../projects/React_ToDo_List.webp';

/*import L_REDUX from "../../assests/skills/redux.svg";
import Button from 'react-bootstrap/Button';
import L_BOOTSTRAP from "../../assests/skills/bootstrap-4.svg"
import L_REACT_BOOTSTRAP from "../../assests/skills/react-bootstrap.svg";
import L_NODE_JS from "../../assests/skills/nodejs.svg";
import L_EXPRESS from "../../assests/skills/express.svg";
import L_MONGODB from "../../assests/skills/mongodb.svg";
import L_JAVASCRIPT from "../../assests/skills/javascript.svg";*/


function project() {
    return (
    
        <div id="project">
        <h1 className="pt-3 text-center ">PROJECTS</h1>
        <hr/>
        <h5>FULL STACK PROJECTS</h5>
        <div className="d-flex justify-content-between flex-row mt-1 ">
              <div className="focus">
            
              <Accordion>
              <Card style={{ width: '16rem' }} class="card h-200 ">
              <Card.Img variant="top" src={REACTTODO} />
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
                        <strong>Description:</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Keeps track of your Todos</li>
                          <li>Powered by React and Material UI</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
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
                              Material-UI
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    
                    <Card.Body>
                    <Card.Link href="#">github</Card.Link>
                    <Card.Link href="#">webview</Card.Link>
                    </Card.Body>
                    </Card>
                   
                    </Accordion>
                
              

              </div>

              <div className="focus">
              <Accordion>
              <Card style={{ width: '16rem' }} class="card h-200">
              <Card.Img variant="top" src={REACTTODO} />
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
                        <strong>Description:</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Keeps track of your Todos</li>
                          <li>Powered by React and Material UI</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
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
                              Material-UI
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    
                    <Card.Body>
                    <Card.Link href="#">github</Card.Link>
                    <Card.Link href="#">webview</Card.Link>
                    </Card.Body>
                    </Card>
                   
                    </Accordion>
                
              </div>

              <div className="focus">
              <Accordion>
              <Card style={{ width: '16rem' }} class="card h-200">
              <Card.Img variant="top" src={REACTTODO} />
              {/*<Card.Body titleTypographyProps={{variant:'h3' }}>Project title:Social Man Kind</Card.Body>*/}
              
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Keeps track of your Todos</li>
                          <li>Powered by React and Material UI</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
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
                              Material-UI
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    
                    <Card.Body>
                    <Card.Link href="#">github</Card.Link>
                    <Card.Link href="#">webview</Card.Link>
                    </Card.Body>
                    </Card>
                   
                    </Accordion>
                
              </div>

              </div>
                  </div>   
        
    )
}

export default project
