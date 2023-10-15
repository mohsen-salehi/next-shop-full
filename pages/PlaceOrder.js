"use client"
import React, {useContext} from 'react';
import Layout from "./../components/Layout";
import CheckoutWizard from "@/components/CheckoutWizard";
import {StoreContext} from "@/context/store";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";

function PlaceOrder() {


    const {state} = useContext(StoreContext)
    const {cart} = state
    const {cartItems, shippingData, paymentMethod} = cart
    const router = useRouter()
    const placeOrderHandler = async () => {
        const totalPrice = cartItems.reduce((acc, cur ) => acc + (cur.qty * cur.price) , 0)

        const response = await fetch('/api/orders', {
            method: 'POST',
            body: JSON.stringify({
                orderItems: cartItems,
                shippingData,
                paymentMethod,
                totalPrice,
            }),
            headers: { 'Content-Type': 'application/json' },
        })


        const data = await response.json()
        console.log(data)
        // router.push("/test")
    }





    return (<Layout title="Place Order">
        <CheckoutWizard activeStep={3}/>
        <div className="w-full flex flex-wrap">
            <div className="w-full md:w-3/4">
                <div className="w-full flex flex-wrap rounded-xl bg-stone-200 shadow p-3">
                    <h1 className="text-2xl fw-bold mb-4 text-center w-full">
                        PlaceOrder
                    </h1>
                    <div className="flex-wrap flex md:w-full w-1/2 bg-white rounded-xl p-2">
                        <h2 className="text-xl fw-bold mb-4">
                            Details Order
                        </h2>
                        <div className="w-full flex flex-wrap ">
                            <h4 className="w-full flex my-2 bg-stone-100 p-2 rounded-xl ">
                                Name : {shippingData?.name}
                            </h4>
                            <h4 className="w-full flex  my-2 bg-stone-100 p-2 rounded-xl">
                                Address : {shippingData?.address}
                            </h4>
                            <h4 className="w-full flex  my-2 bg-stone-100 p-2 rounded-xl">
                                Postal Code : {shippingData?.postalCode}
                            </h4>
                            <h4 className="w-full flex  my-2 bg-stone-100 p-2 rounded-xl">
                                paymentMethod : {paymentMethod}
                            </h4>
                            <div className="flex mt-3">
                                <Link href="/shipping" className="bg-amber-300 rounded-xl p-2 ">Edit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-wrap flex md:w-full w-1/2 bg-white rounded-xl my-2 p-2">
                        <h2 className="text-xl fw-bold mb-4">
                            Order Items
                        </h2>
                        <div className="flex flex-wrap w-full p-2">
                            <div className="w-full flex flex-wrap py-2 ">
                                <div className="w-5/12">Item</div>
                                <div className="w-2/12">Quantity</div>
                                <div className="w-3/12">Price</div>
                                <div className="w-2/12">SubTotal</div>
                            </div>
                            {cartItems.map((item, index) => (<div key={index}
                                                                  className="w-full my-2 bg-stone-100 p-2 flex flex-wrap border rounded-xl">
                                <div className="w-5/12 flex flex-wrap items-center">
                                    <Image src={item.image} alt={item.name} width={100} height={100}
                                           className="rounded-xl"/>
                                    <strong className="px-1">{item?.name}</strong>
                                </div>
                                <div className="w-2/12 flex items-center">
                                    {item?.qty}
                                </div>
                                <div className="w-3/12 flex items-center ">
                                    {item?.price}
                                </div>
                                <div className="w-2/12 flex items-center ">
                                    {(item?.price) * (item?.qty)}
                                </div>
                            </div>))}
                            <div className="flex mt-3">
                                <Link href="/cart" className="bg-amber-300 rounded-xl p-2 ">Edit Basket</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/4 px-3">
                <div className="rounded-xl p-3 bg-stone-200 flex flex-wrap">
                    <h4 className="text-2xl fw-bold mb-4 text-center w-full">
                        Order Summery
                    </h4>
                    <div className="w-full flex rounded-xl bg-white justify-between p-2">
                        Total Price :
                        <strong>
                            $ {cartItems.reduce((acc, cur) => acc + (cur.qty * cur.price), 0)}
                        </strong>
                    </div>
                    <div className="w-full mt-4">
                        <button onClick={placeOrderHandler} className="bg-gray-700 p-2 w-full rounded-xl text-white">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>);
}

export default dynamic(() => Promise.resolve(PlaceOrder), {ssr: false});