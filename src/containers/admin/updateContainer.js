import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import { createBio, updateBio } from '../../actions';
import CollapsibleBio from './adminComponents/collapsibleBio';

const emptyBio = {
  name: '',
  major: '',
  year: '',
  content: '',
  image: '',
};

const UpdateContainer = (props) => {
  const bioItems = props.bios.map((bio) => {
    return (
      <CollapsibleBio key={bio._id} update={props.update} bio={bio} />
    );
  });

  return (
    <div className="bios">
      <CollapsibleBio key={-1} update={null} create={props.create} bio={emptyBio} />
      {bioItems}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bios: state.bios.all,
});

const mapDispatchToProps = (dispatch) => {
  return {
    update: (bio, file, id) => {
      console.log('update');
      dispatch(updateBio(bio, file, id));
    },
    create: (bio, file) => {
      console.log('create');
      dispatch(createBio(bio, file));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateContainer);
