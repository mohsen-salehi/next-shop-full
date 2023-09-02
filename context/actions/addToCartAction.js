export const addToCartAction = (data, dispatch) => {
  dispatch({ type: "ADD_ITEMS", payload: data });
};
