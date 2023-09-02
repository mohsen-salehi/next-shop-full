export const deleteItemAction = (data, dispatch) => {
  dispatch({ type: "DELETE_ITEM", payload: data });
};
