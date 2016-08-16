import { ActionTypes } from '../actions';

const BioReducer = (state = {
  bios: [],
  bio: {},
}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_BIOS:
      return ({
        bios: action.bios,
        bio: this.state.profiles.bio,
      });
    case ActionTypes.FETCH_BIO:
      return ({
        bios: this.state.profiles.bios,
        bio: this.state.bio,
      });
    default:
      return state;
  }
};

export default BioReducer;
