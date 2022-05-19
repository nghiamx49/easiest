import { SET_LOADING_STATE } from "../constants/";

export const setLoading = (state) => {
  return { type: SET_LOADING_STATE, payload: state };
};
