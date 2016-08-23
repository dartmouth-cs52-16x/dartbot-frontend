import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import { createBio, updateBio, fetchBios, deleteBio } from '../../actions';
import CollapsibleBio from './adminComponents/collapsibleBio';

const emptyBio = {
  name: '',
  major: '',
  year: '',
  content: '',
  image: '',
};

class UpdateContainer extends Component {
  componentDidMount() {
    this.props.fetch(this);
    console.log('mounting');
  }
  componentWillReceieveProps() {
    this.setState({});
  }
  render() {
    const bioItems = this.props.bios.map((bio) => {
      return (
        <CollapsibleBio key={bio._id} update={this.props.update} delete={this.props.delete} bio={bio} />
      );
    });
    return (
      <div className="bios">
        <CollapsibleBio key={-1} update={null} create={this.props.create} delete={this.props.delete} bio={emptyBio} />
        {bioItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bios: state.bios.all,
});

const mapDispatchToProps = (dispatch) => {
  return {
    update: (bio, file) => {
      console.log(bio);
      dispatch(updateBio(bio, file, bio._id));
    },
    create: (bio, file) => {
      dispatch(createBio(bio, file));
    },
    fetch: () => {
      dispatch(fetchBios());
    },
    delete: (id) => {
      dispatch(deleteBio(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateContainer);
