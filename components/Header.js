import React, {useContext, useEffect, useState} from "react";
import Link from "next/link";
import { StoreContext } from "@/context/store";

function Header() {
  const { state, dispatch } = useContext(StoreContext);
  const { cart } = state;

  const [cartItemsCount , setCartItemsCount] = useState(0)
    useEffect(() => {
        setCartItemsCount(
            cart?.cartItems?.reduce(
                (previousValue, currentValue) =>
                    previousValue + currentValue?.qty,
                0
            )
        )
    }, [cart.cartItems]);

  return (
    <header className="w-full rounded-xl bg-white shadow-md p-3 flex flex-wrap justify-between">
      <h1 className="border-b border-amber-300">
        <Link href="/">Shopping</Link>
      </h1>
      <nav className="w-auto ">
        <Link className="mx-2" href="/cart">
          Cart
          {cartItemsCount > 0 && (
            <span className="mx-1 bg-stone-500 px-1 text-white rounded-xl text-xs">
                {cartItemsCount}
            </span>
          )}
        </Link>
        <Link className="mx-2" href="/login">
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;
