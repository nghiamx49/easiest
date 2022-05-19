import {adminContants} from '../constants/index'

const initialState = {
  allProviders: [],
  allUsers: [],
  allProducts:[],
  pagesProvider : 1 ,
  pagesUsers : 1 ,
  pagesProducts : 1 ,
  sort: ""
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminContants.GET_ALL_USERS_SUCCESS:
      return {...state , allUsers : action.payload.data , pagesUsers  : action.payload.pages , sort : ""};

    case adminContants.GET_ALL_PROVIDERS_SUCCESS:
      return {...state , allProviders : action.payload.data , pagesProvider : action.payload.pages , sort : ""};

    case adminContants.GET_ALL_PRODUCTS_SUCCESS:
      return {...state , allProducts : action.payload.data , pagesProducts:  action.payload.pages , sort : ""};

    case adminContants.SORT_PROVIDER:
      let sortProvider = state.allProviders;
      sortProvider.sort((a,b) => (a.username > b.username) ? 1 : -1);
      return {...state , allProviders : sortProvider , sort : adminContants.SORT_PROVIDER};
    
    case adminContants.SORT_USER:
      let sortUser = state.allUsers;
      sortUser.sort((a,b) => (a.username > b.username) ? 1 : -1);
      return {...state , allProviders : sortUser , sort : adminContants.SORT_USER};

    case adminContants.SORT_PRODUCT:
      let sortProduct = state.allProducts;
      sortProduct.sort((a,b) => (a.name > b.name) ? 1 : -1);
      return {...state , allProviders : sortProduct , sort : adminContants.SORT_PRODUCT};

  default:
      return {...state};
  }
};

export default adminReducer;
