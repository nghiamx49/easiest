import { takeLatest, put, call } from "redux-saga/effects";
import {
  getProductsSuccess,
  getProductDetailSuccess,
} from "../actions/productAction";
import productService from "../apiServices/productService";
import { productContants } from "../constants";

function* getProducts(action) {
  try {
    let data = yield call(productService.getAllProduct, action.payload);
    if (data.status === 200) {
      yield put(getProductsSuccess(data.data));
    }
  } catch (e) {
    console.log(e);
  }
}
function* getProductDetail(action) {
  try {
    let { data } = yield call(productService.getProductDetail, action.payload);
    if (data.status === 200) {
      yield put(getProductDetailSuccess(data.data));
    } else {
      yield put(getProductDetailSuccess(data));
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* getProductsSaga() {
  yield takeLatest(productContants.GET_ALL_PRODUCTS, getProducts);
  yield takeLatest(productContants.GET_PRODUCT_DETAIL, getProductDetail);
}
