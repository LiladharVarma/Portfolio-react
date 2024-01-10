import React from "react";
import Card from "./Card";
import data from "./skillsdata"

// function to create multiple card here we are passing only single object at a time by name entry

function createSkillCard(entry){
    return(
        <Card 
            heading = {entry.skill}
            content = {entry.description}
        />
    );

}

function Skills() {
  return (
    <section class="skills-container" id="skills-container">
      <h1 class="heading centre">Skills</h1>
      <div class="intro">
        <p class="style  first centre">
          As we recognize that change is the only constant, we can draw a
          parallel with learning, which too remains a constant force in our
          lives.
        </p>
      </div>
      <div id="skills">

{/* for  creating multiple cards from skillData.js file   */}
      {data.map(createSkillCard)}
    
        <Card
          heading="Familiar With"
          content={
            <ol class="style  centre">
              <li>Git </li>
              <li>Github</li>
              <li>Intellij IDE</li>
              <li>VSCode</li>
              <li>Eclipse</li>
              <li>Jupyter Notebook</li>
            </ol>
          }
        />
    
      </div>
    </section>
  );
}

export default Skills;
