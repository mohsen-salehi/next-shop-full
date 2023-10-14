import React, {useContext, useEffect} from 'react';
import Layout from "@/components/Layout";
import CheckoutWizard from "@/components/CheckoutWizard";
import {StoreContext} from "@/context/store";
import saveShippingData from "@/context/actions/saveShippingData";
import Cookie from "js-cookie";
import {useRouter} from "next/router";
import {Form, Formik} from "formik";
import InputValidation from "@/components/inputs/inputValidation";

function ShippingPage() {
    const {state, dispatch} = useContext(StoreContext);
    const {cart} = state
    const {shippingData} = cart

    const router = useRouter()
    const initialValue = {
        name: cart.shippingData?.name ?? "",
        address: cart.shippingData?.address ?? "",
        postalCode: cart.shippingData?.postalCode ?? ""
    }
    const submitHandler = ({name, address, postalCode}, action) => {
        saveShippingData({name, address, postalCode}, dispatch)
        Cookie.set('cart', JSON.stringify({
            ...cart,
            shippingData: {
                name,
                address,
                postalCode
            }
        }))
        router.push("/payment")
    }
    return (
        <Layout title="shipping">
            <CheckoutWizard activeStep={1}/>
            <Formik initialValues={initialValue} onSubmit={submitHandler}>
                {
                    (props) => (
                        <Form className="rounded-xl mb-4 bg-stone-200 flex flex-wrap p-3 w-full shadow-md ">
                            <h2 className="mb-3 text-xl">
                                Shipping
                            </h2>
                            <div className="w-full ">
                                <InputValidation
                                    name="name"
                                    placeholder="Name"
                                    autoFocus
                                />
                            </div>
                            <div className="w-full ">
                                <InputValidation
                                    name="address"
                                    placeholder="Address"
                                    autoFocus
                                />
                            </div>
                            <div className="w-full ">
                                <InputValidation
                                    name="postalCode"
                                    placeholder="Postal code"
                                    autoFocus
                                />
                            </div>

                            <div className="mb-4 w-full ">
                                <button type="submit" className="rounded-xl bg-gray-700 text-white px-4 py-2 w-28 ">
                                    Next Step
                                </button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </Layout>
    );
}
ShippingPage.auth = true
export default ShippingPage;