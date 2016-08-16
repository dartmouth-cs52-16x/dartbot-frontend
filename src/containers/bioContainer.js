import React from 'react';
import { connect } from 'react-redux';
import BioItem from '../components/bio-item';

const BioContainer = (props) => {
  const bioItems = props.bios.map((bio) => {
    return (
      <BioItem key={bio._id} bio={bio} />
    );
  });

  return (
    <div className="bios">
      {bioItems}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bios: state.bios.all,
});

export default connect(mapStateToProps)(BioContainer);
