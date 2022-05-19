import { cartContants } from "../constants/";

const initialState = {
  loading: false,
  data: [],
};

const {
  GET_ALL_PRODUCTS_IN_CART_SUCCESS,
  REMOVE_PRODUCT_FROM_CART_SUCCESS,
  SET_CART_LOADING,
  INCREASE_QUANTITY_SUCCESS,
  DECREASE_QUANTITY_SUCCESS,
} = cartContants;

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_IN_CART_SUCCESS:
      return { ...state, data: action.payload };
    case REMOVE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        data: state.data.filter(
          (item) => parseInt(item.id) !== parseInt(action.payload),
        ),
      };
    case INCREASE_QUANTITY_SUCCESS:
      let data = [...state.data];
      const itemIndex = data.indexOf(action.payload);
      data[itemIndex].quantity_purchased += 1;
      const increaseState = { ...state, data: [...data] };
      return increaseState;
    case DECREASE_QUANTITY_SUCCESS:
      let dataClone = [...state.data];
      const itemInd = dataClone.indexOf(action.payload);
      if (dataClone[itemInd].quantity_purchased > 1) {
        dataClone[itemInd].quantity_purchased -= 1;
      } else {
        dataClone.splice(itemInd, 1);
      }
      const decreaseState = { ...state, data: [...dataClone] };
      return decreaseState;
    case SET_CART_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
