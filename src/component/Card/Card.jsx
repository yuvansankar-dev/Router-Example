import React from "react";
import "./Card.css";

const Card = ({ info }) => {
  return (
    <div>
      <div className='card' id='card'>
        <img
          src={info.image}
          className='card-img-top'
          alt={info.course}
          style={{ width: "350px", height: "200px" }}
        />
        <div className='card-body'>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <b>Batch : </b> {info.course}
            </p>
            <p className='batch-id'>{"ID : " + info.batchId}</p>
          </div>
          <h5 className='card-title'>{info.Title}</h5>
          <p className='card-text'>{info.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
