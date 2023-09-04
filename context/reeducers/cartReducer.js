import Cookie from "js-cookie";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS": {
      const newItem = action.payload;
      const existingItem = state?.cart?.cartItems?.find(
        (item) => item?.slug === newItem.slug
      );
      const cartItems = existingItem
        ? state?.cart?.cartItems.map((item) =>
            item?.slug === existingItem?.slug ? newItem : item
          )
        : [...state?.cart?.cartItems, newItem];

       Cookie.set("cart" , JSON.stringify({...state.cartItems ,  cartItems}))
      return { ...state , cart : {...state.cartItems ,  cartItems} };
    }

    case "DELETE_ITEM": {
      const currentItem = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      );
      Cookie.set("cart" , JSON.stringify({cartItems : currentItem}))

       return {
         ...state,
         cart: {cartItems : currentItem}
       };
    }
    default:
      return state;
  }
};
