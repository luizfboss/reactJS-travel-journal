import React from "react";


function Element(props) {
  return (
    <div className="element-container">
      <img src={props.item.imageUrl} />
      <p>{props.item.location} <a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
      
      <h1>{props.item.title}</h1>

      <h3>{props.item.startDate} - {props.item.endDate}</h3>

      <p>{props.item.description}</p>

    </div>
  );
}

export default Element;
