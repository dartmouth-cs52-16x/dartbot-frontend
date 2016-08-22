import { ActionTypes } from '../actions';

const AnalyticsReducer = (state = {
  locData: [],
  intentData: [],
  surveyData: [],
}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_LOC_DATA:
      return ({ ...state, locData: action.payload });
    case ActionTypes.FETCH_INTENT_DATA:
      return ({ ...state, intentData: action.payload });
    case ActionTypes.FETCH_SURVEY_DATA:
      return ({ ...state, surveyData: action.payload });
    default:
      return state;
  }
};

export default AnalyticsReducer;
