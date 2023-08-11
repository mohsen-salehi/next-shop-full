import React from 'react';
import Link from "next/link";

function Header() {
    return (
        <header className="w-full rounded-xl bg-white shadow-md p-3 flex flex-wrap justify-between">
            <h1 className="border-b border-amber-300">Shopping</h1>
            <nav className="w-auto ">
                <Link className="mx-2" href="/cart">Cart</Link>
                <Link className="mx-2" href="/login">Login</Link>
            </nav>
        </header>
    );
}

export default Header;