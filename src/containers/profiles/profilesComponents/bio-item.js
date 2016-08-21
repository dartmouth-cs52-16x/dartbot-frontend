import React from 'react';

const BioItem = (props) => {
  return (
    <div className="bio-item">
      <h1 className="name"> {props.bio.name} {props.bio.year}</h1>
      <h3 className="major"> {props.bio.major} </h3>
      <div className="image">
        <img src={props.bio.image} alt="bio" />
      </div>
      <div className="content">
        <p> {props.bio.content} </p>
      </div>
    </div>
  );
};

export default BioItem;
