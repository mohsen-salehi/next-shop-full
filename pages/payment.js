import React, {useContext, useState} from 'react';
import Layout from "@/components/Layout";
import CheckoutWizard from "@/components/CheckoutWizard";
import Link from "next/link";
import {StoreContext} from "@/context/store";
import savePaymentMethodAction from "@/context/actions/savePaymentMethodAction";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import Cookie from "js-cookie";

function PaymentPage() {
    const {state , dispatch} = useContext(StoreContext)
    const {cart} = state
    const {paymentMethod} = cart
    const router = useRouter()
    const methods = ["Gateway", "Offline Payment" ]
    const [paymentSelected , setPaymentSelected]  = useState(paymentMethod ?? '')
    const submitHandler = (e) => {
        e.preventDefault()
        if(!paymentSelected) {
            toast.warn("Please Select Payment Method")
        }else{
            router.push("/PlaceOrder")
        }
        savePaymentMethodAction(paymentSelected , dispatch)
        Cookie.set("cart" , JSON.stringify({
            ...cart,
            paymentMethod : paymentSelected
        }))

    }


    return (
        <Layout title="Payment">
            <CheckoutWizard activeStep={2}/>
            <form onSubmit={submitHandler} className="border shadow w-full p-3 rounded-xl bg-stone-200 flex flex-wrap">
                <h2 className="w-full mb-3">Payment Method</h2>
                {
                    methods.map(item => (
                        <div className="w-full flex-wrap flex mb-4" key={item}>
                            <input checked={paymentSelected === item} onChange={() => setPaymentSelected(item)} type="radio" name="paymentMethod" className="p-2 outline-0 focus:ring-0" id={item}/>
                            <label htmlFor={item} className="px-2">{item}</label>
                        </div>
                    ))
                }
                <div className="border shadow w-full p-3 mt-4 rounded-xl bg-stone-200 flex justify-between flex-wrap">
                    <Link className="p-2 px-5 rounded-xl text-black bg-gray-400" href="/shipping">Back</Link>
                    <button type="submit" className="p-2 px-5 rounded-xl text-white bg-gray-700">Next</button>
                </div>
            </form>

        </Layout>
    );
}

export default PaymentPage;