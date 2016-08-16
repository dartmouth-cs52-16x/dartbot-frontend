import React from 'react';
import { connect } from 'react-redux';
import BioItem from './profilesComponents/bio-item';

const BioContainer = (props) => {
  const bioItems = props.bios.map((bio) => {
    return (
      <BioItem key={bio._id} bio={bio} />
    );
  });

  return (
    <div className="bios">
      <h1> Tour Guide Profiles</h1>
      {bioItems}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bios: state.bios.all,
});

export default connect(mapStateToProps, null)(BioContainer);
