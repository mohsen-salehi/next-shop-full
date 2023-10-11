import React, {useContext, useEffect, useState} from "react";
import Link from "next/link";
import { StoreContext } from "@/context/store";
import {useSession , signOut} from "next-auth/react";
import  {Menu} from "@headlessui/react";
import DropDown from "@/components/dropDown";
import Cookie from "js-cookie";
function Header() {
  const { state, dispatch } = useContext(StoreContext);
  const { cart } = state;
  const {status , data : session} = useSession()
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

  const logoutHandler = () => {
      Cookie.remove()
      signOut({
          callbackUrl : '/login'
      })
  }
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
          {
              status === "loading" ? (
                  "Loading..."
              ) : session?.user ? (
                 <Menu as="div" className="relative inline-block">
                     <Menu.Button className="text-blue-500">
                         {session?.user?.name}
                     </Menu.Button>
                     <Menu.Items className="absolute right-0 w-56 bg-white roundexl p-2 origin-top-right border border-slate-100">
                         <React.Fragment>
                             <DropDown className="flex p-2 hover:bg-amber-100" href="/profile">
                                 Profile
                             </DropDown>
                             <DropDown className="flex p-2 hover:bg-amber-100" href="#" onClick={logoutHandler}>
                                 Logout
                             </DropDown>
                         </React.Fragment>
                     </Menu.Items>
                 </Menu>
              ) : (
                  <Link className="mx-2" href="/login">
                      Login
                  </Link>
              )
          }

      </nav>
    </header>
  );
}

export default Header;
