import React from 'react';
import { connect } from 'react-redux';
import BioItem from './profilesComponents/bio-item';
import { fetchBios } from '../../actions';

const BioContainer = (props) => {
  const bioItems = props.bios.map((bio) => {
    return (
      <BioItem key={bio.id} bio={bio} />
    );
  });

  props.fetchBios();

  return (
    <div>
      <div className="bios-user">
        {bioItems}
      </div>
      <div className="footer">
        <a href="#"> <i className="fa fa-facebook-square fa-2x" ></i> </a>
        <a href="#"> <i className="fa fa-twitter fa-2x"></i> </a>
        <a href="#"> <i className="fa fa-envelope fa-2x"></i> </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bios: state.bios.all,
});

export default connect(mapStateToProps, { fetchBios })(BioContainer);
