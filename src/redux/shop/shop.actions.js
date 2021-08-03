import { ShopActionTypes } from "./shop.types";

export const doSearch = searchString => ({
  type: ShopActionTypes.DO_SEARCH,
  payload: searchString
});