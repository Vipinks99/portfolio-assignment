import React from 'react';
import './Card.css';

// Reuseable Component for Dashboard Data
const Card = ({ id,placeId, address, latitude, longitude,type }) => {

  return (
    <div className="card" key={id}>
      <div className="card-header">
        <h3>Place Id: {placeId}</h3>
      </div>
      <div className="card-body">
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Latitude:</strong> {latitude}</p>
        <p><strong>Longitude:</strong> {longitude}</p>
        <p><strong>Location Type:</strong> {type}</p>
      </div>
    </div>
  );
};

export default Card;
