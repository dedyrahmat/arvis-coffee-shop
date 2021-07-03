import { persistStore, persistReducer } from "redux-persist";
import { createStore, combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import { createWrapper } from "next-redux-wrapper";

import * as reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "accessToken", "cart"],
};

const allReducers = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(persistedReducer);
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
export const persistor = persistStore(store);
