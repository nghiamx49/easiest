import { SET_LOADING_STATE } from "../constants/";

const initialState = false;

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
