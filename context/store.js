import { createContext, useReducer } from "react";
import { cartReducer } from "@/context/reducers/cartReducer";
import Cookie from "js-cookie"

export const StoreContext = createContext();

const initialState = {
  cart: Cookie.get("cart") ? JSON.parse(Cookie.get("cart")) : {cartItems  : [] , shippingData : [] , paymentMethod : ''}
};

export function StoreContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = { state, dispatch };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
