import React from "react";
import "./Card.css";
import images from '../../'
const Card = props =>{
  return (
    <div className="card">
      <div className="img-container">
      <img alt={props.id}src={require("../../images/" + props.image)}/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
          <li>  
            <a href={props.site}>Link</a> 
          </li>
          <li>
          <a href={props.repo}>Repository</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card