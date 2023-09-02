import { createContext, useReducer } from "react";
import { cartReducer } from "./reeducers/cartReducer";

export const StoreContext = createContext();

const initialState = {
  cart: { cartItems: [] },
};

export function StoreContextProvidor({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = { state, dispatch };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
