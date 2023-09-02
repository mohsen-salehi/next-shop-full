export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS": {
      console.log(action.payload);
      const newItem = action.payload;

      const existingItem = state?.cart?.cartItems.find(
        (item) => item?.slug === newItem.slug
      );

      const cartItems = existingItem
        ? state?.cart?.cartItems.map((item) =>
            item?.title === existingItem?.title ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case "DELETE_ITEM": {
      const currentItem = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      );
      return {
        ...state,
        cart: { ...state.cart, cartItems: currentItem },
      };
    }

    default:
      return state;
  }
};
