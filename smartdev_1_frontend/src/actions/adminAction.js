import {adminContants} from '../constants/index'

export const getUser = ( status , token , page) => {
    return {
        type : adminContants.GET_ALL_USERS,
        payload : token,
        page : page, 
        status : status
    }
}

export const getProvider = (status ,token, page) => {
    return {
        type : adminContants.GET_ALL_PROVIDERS,
        payload : token,
        page : page,
        status: status
    }
}

export const getProviderSuccess = (data) => {
    return {
        type :adminContants.GET_ALL_PROVIDERS_SUCCESS, 
        payload : data,
    }
}

export const getUserSuccess = (data) => {
    return {
        type :adminContants.GET_ALL_USERS_SUCCESS, 
        payload : data,
    }
}

export const getAllProduct = (status ,token,page) => {
    return {
        type : adminContants.GET_ALL_PRODUCTS,
        payload : token,
        page : page,
        status
    }
}

export const getAllProductSuccess = (data) => {
    return {
        type :adminContants.GET_ALL_PRODUCTS_SUCCESS, 
        payload : data,
    }
}

export const searchProduct = (status ,token, searchValue) => {
    return {
        type : adminContants.SEARCH,
        payload : token,
        search : searchValue,
        status
    }
}

export const  searchProductSuccess = (data) => {
    return {
        type :adminContants.GET_ALL_PRODUCTS_SUCCESS, 
        payload : data,
    }
}

export const  sortProvider = () => {
    return {
        type :adminContants.SORT_PROVIDER, 
    }
}

export const  sortUser = () => {
    return {
        type :adminContants.SORT_USER, 
    }
}

export const  sortProduct = () => {
    return {
        type :adminContants.SORT_PRODUCT, 
    }
}

