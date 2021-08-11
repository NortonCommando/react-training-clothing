import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionFailure = (errorMsg) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMsg,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const CollectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    CollectionRef.get()
      .then((snapshot) => {
        dispatch(
          fetchCollectionSuccess(convertCollectionsSnapshotToMap(snapshot))
        );
      })
      .catch((error) => {
        dispatch(fetchCollectionFailure(error.message));
      });
  };
};
