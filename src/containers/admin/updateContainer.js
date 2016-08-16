import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const UpdateContainer = (props) => {
  const bioItems = props.bios.map((bio) => {
    return (
      <Link to={`admin/bios/${bio._id}`}> bio.name </Link>

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

export default connect(mapStateToProps)(UpdateContainer);
