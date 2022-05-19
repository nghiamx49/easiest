import { productContants } from "../constants";

const initialState = {
  allProducts: [],
  product: {},
  pages: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productContants.GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, allProducts: action.payload, page: action.page };
    case productContants.GET_PRODUCT_DETAIL_SUCCESS:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

export default productReducer;
