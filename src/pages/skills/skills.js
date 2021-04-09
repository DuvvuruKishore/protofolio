import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";
import './skills.css';
import { Skill} from "./skills_data";

const skills=()=> {
    return (
        <div id="skills">
        <div className="pt-3 pb-3" >
     
     
       {/* Frontend */}
       
         <Card className="focus mt-2 mb-2">
           <Card.Body>
           <Card.Title className="text-center  card-title">TECH SKILLS</Card.Title>
           <hr/>
             <Card.Text className="card-text d-flex justify-content-start flex-row ">
               {Skill.frontend.map((skill, index) => (
                 <span className="p-2 value" key={index} >
                   <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                     <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1 "></Image> {skill.skillName}
                   </a>
                 </span>
               ))}
             </Card.Text>
           </Card.Body>
         </Card>
       </div>       
        </div>
    )
}

export default skills
