import React, {useContext} from 'react';
import Link from "next/link";
import {CartContext} from "@/context/Cart";

function Header() {

    const {state, dispatch} = useContext(CartContext)
    const {cart} = state

    return (
        <header className="w-full rounded-xl bg-white shadow-md p-3 flex flex-wrap justify-between">
            <h1 className="border-b border-amber-300">Shopping</h1>
            <nav className="w-auto ">
                <Link className="mx-2" href="/cart">
                    Cart
                    {cart.cartItems?.length > 0 && <span className="mx-1 bg-stone-500 px-1 text-white rounded-xl text-xs">{cart?.cartItems.reduce((previousValue , currentValue)=>  previousValue + currentValue?.qty , 0)}</span>}
                </Link>
                <Link className="mx-2" href="/login">Login</Link>
            </nav>
        </header>
    );
}

export default Header;