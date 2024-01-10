import React from "react" ; 

function ProjectCard(props){
    return (
        <div className="box box1 project-card">
        <img className="project-image" src={props.img} />
        <h2 className="h2-secondary centre">{props.heading}</h2>
        <p className="style">
          {props.content}
        </p>
        <a className = "try-button" href={props.link} target="blank">Try It Here</a>
      </div>
      )
}

export default ProjectCard;