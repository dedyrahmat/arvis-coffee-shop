import { SET_ACCESS_TOKEN, SET_LOADING, SET_USER, SET_CART } from "./actions";

export const user = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return payload;

    default:
      return state;
  }
};

export const accessToken = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ACCESS_TOKEN:
      return payload;

    default:
      return state;
  }
};

export const loading = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return payload;

    default:
      return state;
  }
};

export const cart = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CART:
      return payload;

    default:
      return state;
  }
};