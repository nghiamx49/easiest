import { providerContants } from "../constants";

const initialState = {
  listProducts:[],
  totalPage:0
};

const providerReducer = (state = initialState, action) => {
  switch (action.type) {
    case providerContants.GET_ALL_OWN_PRODUCT_SUCCESS:

      const newlist = [...action.payload]
      return {
        ...state,listProducts:newlist,totalPage:action.page
      }
    case providerContants.GET_ALL_OWN_PRODUCT_PENDING_SUCCESS:
        const newlistpending = [...action.payload]
        return {
          ...state,listProducts:newlistpending,totalPage:action.page - 1
        }
    default:
      return state;
  }
};

export default providerReducer;
