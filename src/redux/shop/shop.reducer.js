import SHOP_DATA from "./shop.data.js"

const initialState = {
  collections: SHOP_DATA
}

const shopReducer = (state = initialState, { type }) => {
  switch (type) {
  default:
    return state
  }
}

export default shopReducer;