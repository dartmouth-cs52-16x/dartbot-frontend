import React, { Component } from 'react';
import { fetchIntent } from '../../../actions';
import UpdateIntentItem from './update-intent-item';

class UpdateIntent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      querey: '',
      response: '',
    };
    this.onNewIntentClick = this.onNewIntentClick.bind(this);
    this.renderIntents = this.renderIntent.bind(this);
  }

  componentWillMount() {
    this.props.fetch();
  }

  onNewIntentClick() {
    this.props.createLoc(this.state);
  }

  renderLocs() {
    this.props.locs.map(loc => {
      return (
        <UpdateIntentItem loc={loc} update={this.props.update} delete={this.props.deleteLoc} />
      );
    });
  }

  render() {
    return (
      <div>
        <div id="newLoc">
          <button onClick={this.onNewLocClick}> Add New Location </button>
        </div>
        {this.renderLocs()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  intents: state.intents.all,
});

const mapDispatchToProps = (dispatch) => {
  return {
    create: (loc) => {
      dispatch(createLoc(loc));
    },
    update: (loc, id) => {
      dispatch(updateLoc(loc, id));
    },
    delete: (id) => {
      dispatch(deleteLoc(id));
    },
    fetch: () => {
      dispatch(fetchLocs());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateLoc);
