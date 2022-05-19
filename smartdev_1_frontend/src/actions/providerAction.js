import * as contants from "../constants"

export const listRequest = (token) => {
    return {
      type: contants.providerContants.GET_ALL_OWN_PRODUCT,
      token:token
    };
  };

  export const listSuccess = (action) => {
    return {
      type:  contants.providerContants.GET_ALL_OWN_PRODUCT_SUCCESS,
      payload:action.data,
      page:action.pages
    };
  };

  export const listRequestProductPending = (action) => {
    return {
      type: contants.providerContants.GET_ALL_OWN_PRODUCT_PENDING,
      token:action.token,
      page:action.page
    };
  };


export const listProductsPendingSuccess = (action) => {
    return {
      type: contants.providerContants.GET_ALL_OWN_PRODUCT_PENDING_SUCCESS,
      payload:action.data,
      page:action.pages
    };
  };