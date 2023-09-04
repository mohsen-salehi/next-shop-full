import Layout from "@/components/Layout";
import {deleteItemAction} from "@/context/actions/deleteItemAction";
import {StoreContext} from "@/context/store";
import Image from "next/image";
import React, {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";


function CartPage() {
    const {state, dispatch} = useContext(StoreContext);
    const {cartItems} = state.cart;
    const [cartValue , setCartValue] = useState([])
    useEffect(()=> {
        setCartValue(cartItems)
    } , [cartItems])
    const router = useRouter()
    // if (!cartItems) {
    //     // router.push('/')
    //     return <div>cart is empty</div>;
    // }
    return (
        <Layout title="cart">
            <section className="shadow flex flex-wrap justify-between w-full bg-white rounded-xl p-10">
                <div className="flex flex-wrap w-2/3 p-2">
                    {cartValue?.map((item, index) => (
                        <div key={index} className="w-full justify-between rounded-xl border-b mb-2 p-2 flex flex-wrap">
                            <Image
                                src={item?.image}
                                width={200}
                                height={200}
                                className="rounded-xl"
                                Layout="responsive"
                                alt="/"/>
                            <div className="w-2/3 flex flex-wrap content-between justify-center">
                                <h3 className="w-full p-2 m-0 justify-between items-center rounded-xl font-bold bg-stone-100 flex">
                                    {item?.name}
                                    <button
                                        onClick={() => deleteItemAction(item, dispatch)}
                                        className="rounded-xl p-1 px-3 text-xs text-white bg-red-600 duration-500 active:bg-red-500"
                                    >
                                        Delete
                                    </button>
                                </h3>
                                <p className="w-full flex p-1 ">Price : {item?.price}</p>
                                <p className="w-full flex p-1 ">Quantity : {item?.qty}</p>
                                <p className="w-full flex p-1 ">
                                    Description : {item?.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex w-1/3 flex-wrap  p-2 pt-4 content-between">
                    <h3 className="p-2 w-full bg-stone-100 rounded-xl text-xl font-bold text-center">Receipt</h3>
                    <div className="flex-wrap h-auto flex w-full">
                        Total Price :  {cartValue.reduce((acc, cur) => acc + (cur.qty * Number(cur.price)), 0)}
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <button onClick={()=> router.push("/shipping")} className="w-full flex rounded-xl bg-stone-600 text-white p-2 justify-center">Checkout</button>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default CartPage;
