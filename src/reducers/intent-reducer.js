import { IntentActionTypes } from '../actions/intentActions';

const IntentReducer = (state = [], action) => {
  switch (action.type) {
    case IntentActionTypes.FETCH_INTENT:
      return (action.payload);
    default:
      return state;
  }
};

export default IntentReducer;
