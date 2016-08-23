import React from 'react';

const BioItem = (props) => {
  const imgURL = props.bio.image ? props.bio.image : 'http://www.patriotenergygroup.com/images2/tba.png';
  return (
    <div className="bio-item">
      <div className="image">
        <img src={imgURL} alt="bio" />
      </div>
      <h1 className="name"> {props.bio.name} {props.bio.year}</h1>
      <h3 className="major"> {props.bio.major} </h3>
      <div className="content">
        <p> {props.bio.content} </p>
      </div>
    </div>
  );
};

export default BioItem;
