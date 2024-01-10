import React from "react";
import Card from "./Card";
import education from "./educationdata"

function createEducationCard(data){
    return (
        <Card 
            heading = {data.titile}
            content = {data.info}
        />
    );
}

function About() {
  return (
    <section className="About-container" id="About-container">
      <div className="head">
        <p className="text-centre">Get To Know</p>
        <h1 className="heading">About Me</h1>
      </div>
      <div className="intro">
        <p className="intro  first centre">Hey Folks !</p>
        <p className="style first centre">
          I'm Liladhar Varma, a student with a boundless passion for technology.
          Welcome to my creative corner, where I bring ideas to life, one
          project at a time.
        </p>
      </div>
      <div className="card-container">

{/* creating multiple cards using map method */}
      {education.map(createEducationCard)}
     
        <div className="box box3">
          <h2 className="h2-secondary centre">Hobbies</h2>
          <ul className="style">
            <li>Watching Movies, Listening Music , Gaming</li>
          </ul>
          <h2 className="h2-secondary centre">Languages</h2>
          <ul className="style">
            <li>English , Hindi , Marathi , Marwadi</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
