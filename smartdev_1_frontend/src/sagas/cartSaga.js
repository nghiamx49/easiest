import { put, call, takeLatest, takeEvery } from "redux-saga/effects";

import cartService from "../apiServices/cartService";

import { cartContants } from "../constants/index";

import {
  getCartSuccess,
  removeItemSuccess,
  increaseQuantitySuccess,
  decreaseQuantitySuccess,
} from "../actions/cartAction";

import { setCartLoading } from "../actions/cartAction";
import { toast } from "react-toastify";

const {
  GET_ALL_PRODUCTS_IN_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} = cartContants;

const { getAllProductInCart, cartAction } = cartService;

function* getCartItems(action) {
  try {
    const { payload } = action;
    let result;
    yield put(setCartLoading(true));
    result = yield call(getAllProductInCart, payload);
    yield put(getCartSuccess(result.data));
    yield put(setCartLoading(false));
  } catch (error) {
    console.log(error);
  }
}

function* removeCartItem({ payload }) {
  try {
    const { id, token } = payload;
    let result = yield call(cartAction, "delete", { id, token });
    if (result.status === 200) {
      yield put(removeItemSuccess(id));
      return toast(<h3 color="black">{result.message}</h3>);
    }
  } catch (error) {
    console.log(error);
  }
}

function* increaseItemQuantity({ payload }) {
  try {
    const { product, token } = payload;
    let result = yield call(cartAction, "increase", { id: product.id, token });
    if (result.status === 200) {
      yield put(increaseQuantitySuccess(product));
    }
  } catch (error) {
    console.log(error);
  }
}
function* decreaseItemQuantity({ payload }) {
  try {
    const { product, token } = payload;
    let result = yield call(cartAction, "decrease", { id: product.id, token });
    if (result.status === 200) {
      yield put(decreaseQuantitySuccess(product));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* carSaga() {
  yield takeLatest(GET_ALL_PRODUCTS_IN_CART, getCartItems);
  yield takeLatest(REMOVE_PRODUCT_FROM_CART, removeCartItem);
  yield takeEvery(INCREASE_QUANTITY, increaseItemQuantity);
  yield takeEvery(DECREASE_QUANTITY, decreaseItemQuantity);
}
