import { authenticateContants } from "../constants";

const initialState = {
  username: "",
  slug: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case authenticateContants.FORGOT_PASSWORD_PROCESS_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
      };
    case authenticateContants.VERIFY_OTP_SUCCESS:
      return {
        ...state,
        slug: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
