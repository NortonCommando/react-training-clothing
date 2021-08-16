import ShopActionTypes from "./shop.types.js";

const initialState = {
  collections: null,
  isFetching: false,
  errorMsg: undefined
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: payload
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMsg: payload
      };
    default:
      return state;
  }
};

export default shopReducer;
