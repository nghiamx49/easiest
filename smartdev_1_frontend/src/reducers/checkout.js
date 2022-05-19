import { cartContants } from "../constants";

const { SET_CHECKOUT_ITEM } = cartContants;

const initialState = {
  id: null,
  product_name: "",
  quantity_purchased: null,
  store_name: "",
  thumbnail_image: "",
  unit_price: "",
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHECKOUT_ITEM:
      return action.payload;
    default:
      return state;
  }
};

export default checkoutReducer;
