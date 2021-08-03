import SHOP_DATA from "./shop.data.js"

import { ShopActionTypes } from "./shop.types.js";

const initialState = {
  collections: SHOP_DATA,
  searchResult: '',
  searchTerm: ''
}

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case ShopActionTypes.DO_SEARCH:
    return {
      ...state,
      searchTerm: payload
    }
  default:
    return state
  }
}

export default shopReducer;