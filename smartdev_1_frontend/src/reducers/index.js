import { combineReducers } from "redux";
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import adminReducer from "./admin";
import authenticateReducer from "./authenticate";
import cartReducer from "./cart";
import productReducer from "./product";
import providerReducer from "./provider";
import userReducer from "./users";
import loadingReducer from "./loading";
import checkoutReducer from "./checkout";

const rootReducer = combineReducers({
  adminReducer,
  authenticateReducer,
  cartReducer,
  productReducer,
  providerReducer,
  userReducer,
  loadingReducer,
  checkoutReducer,
});

const persistsConfig = {
  key: "root",
  storage,
  whitelist: ["authenticateReducer"],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistsConfig, rootReducer);

export const saga = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(saga)),
);

export const persistor = persistStore(store);
