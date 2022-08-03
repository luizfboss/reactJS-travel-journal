import React from "react";


function Element(props) {
  return (
    <div className="element-container">
      <div className="element-img-container">
        <img src={props.item.imageUrl} width="" />
      </div>

      <div className="element-info-container">
        <p className="element-location-text"> <span><img src="images/pin.png" /></span> {props.item.location} <a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
        
        <h1>{props.item.title}</h1>

        <h4>{props.item.startDate} - {props.item.endDate}</h4>

        <p>{props.item.description}</p>
      </div>

    </div>
  );
}

export default Element;
