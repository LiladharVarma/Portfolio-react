import React from "react";

function Card(props){
    return(
    <div className="box box1">
    <h2 className="h2-secondary centre">{props.heading}</h2>
    <p className="style">
      {props.content}
    </p>
  </div>
  );
}

export default Card;