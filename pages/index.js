import Layout from "@/components/Layout";
import {toast} from "react-toastify"
import ProductList from "@/components/ProductComponent/productList";
import db from "@/utils/db";
import Product from "@/models/product";
import {useContext} from "react";
import {StoreContext} from "@/context/store"


export default function Home({products}) {

    const {state, dispatch} = useContext(StoreContext);
    const {cart} = state

    const addToCartHandler = (product) => {

        const existingItem = cart.cartItems.find(item => item.slug === product.slug)

        const qty = existingItem ? existingItem.qty + 1 : 1

        dispatch({type: "ADD_ITEMS", payload: {...product, qty}})

        toast.success("Product Added .")
    }

    return (<Layout title={"Home"}>
        <section className="w-full min-h-screen grid grid-cols-4 gap-4">
            <ProductList addToCart={addToCartHandler} products={products}/>
        </section>
    </Layout>);
}

export async function getServerSideProps() {
    await db.connect()
    const products = await Product.find().lean()

    return {props: {products: products.map(db.convertToObject)}}
}
