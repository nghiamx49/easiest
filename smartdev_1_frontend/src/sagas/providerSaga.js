import { takeLatest, put, call } from "redux-saga/effects";
import { listProductsPendingSuccess, listSuccess } from "../actions/providerAction";
import apiClient from "../apiServices/axiosClient";

import { providerContants } from "../constants";


function * getListProducts(action) {
   
    try {
        let data = yield call(apiClient.apiClientGet,`/provider/all_products/Allowed?page=${action.token.page}`,action.token.token);
        console.log(data)
        if (data.status === 200) {
            yield put(listSuccess(data));
        }
    } catch (e) {
        console.log(e)
    }
}


function * getListProductsPending(action) {
    try {
        let data = yield call(apiClient.apiClientGet,`/provider/all_products/Pending?page=${action.page}`,action.token);
        if (data.status === 200) {
            yield put(listProductsPendingSuccess(data));
        }
    } catch (e) {
        console.log(e)
    }
}

export default function* getListProductSaga() {
    yield takeLatest(providerContants.GET_ALL_OWN_PRODUCT, getListProducts)
    yield takeLatest(providerContants.GET_ALL_OWN_PRODUCT_PENDING, getListProductsPending)
}
