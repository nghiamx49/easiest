import { cartContants } from "../constants/";

const {
  GET_ALL_PRODUCTS_IN_CART,
  GET_ALL_PRODUCTS_IN_CART_SUCCESS,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_PRODUCT_FROM_CART_SUCCESS,
  SET_CART_LOADING,
  INCREASE_QUANTITY,
  INCREASE_QUANTITY_SUCCESS,
  DECREASE_QUANTITY,
  DECREASE_QUANTITY_SUCCESS,
  SET_CHECKOUT_ITEM,
} = cartContants;

export const getAllProductInCart = (token) => {
  return { type: GET_ALL_PRODUCTS_IN_CART, payload: token };
};

export const getCartSuccess = (data) => {
  return { type: GET_ALL_PRODUCTS_IN_CART_SUCCESS, payload: data };
};

export const removeCartItem = (id, token) => {
  return { type: REMOVE_PRODUCT_FROM_CART, payload: { id, token } };
};

export const removeItemSuccess = (id) => {
  return { type: REMOVE_PRODUCT_FROM_CART_SUCCESS, payload: id };
};

export const setCartLoading = (state) => {
  return { type: SET_CART_LOADING, payload: state };
};

export const increaseQuantity = (product, token) => {
  return { type: INCREASE_QUANTITY, payload: { product, token } };
};

export const increaseQuantitySuccess = (product) => {
  return { type: INCREASE_QUANTITY_SUCCESS, payload: product };
};

export const decreaseQuantity = (product, token) => {
  return { type: DECREASE_QUANTITY, payload: { product, token } };
};

export const decreaseQuantitySuccess = (product) => {
  return { type: DECREASE_QUANTITY_SUCCESS, payload: product };
};

export const setCheckoutItem = (data) => {
  return { type: SET_CHECKOUT_ITEM, payload: data };
};
