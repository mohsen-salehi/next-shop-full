import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Image from "next/image";
import productItems from "@/data/products.json";
import { CartContext } from "@/context/Cart";

function ProductPage() {
  const [statusBtn, setStatusBtn] = useState(false);
  const { state, dispatch } = useContext(CartContext);

  const { query } = useRouter();
  const { slug } = query;

  const product = productItems.find((item) => item.slug === slug);

  if (!product) {
    return <div>Product not found! </div>;
  }

  const addToCartHandler = () => {
    const existingItem = state.cart.cartItems.find(
      (item) => item.slug === product.slug
    );
    const qty = existingItem ? existingItem.qty + 1 : 1;

    if (qty > product.count) {
      setStatusBtn(true);
      return;
    }

    dispatch({ type: "ADD_ITEMS", payload: { ...product, qty } });
  };

  return (
    <Layout title={slug}>
      <section className="grid grid-cols-4 p-5 rounded-xl bg-white">
        <div className="col-span-4 p-2 md:p-0 md:col-span-2">
          <Image
            className="rounded-xl shadow"
            width={450}
            height={250}
            src={product?.image}
            alt={product?.name}
            layout="responsive"
          />
        </div>
        <div className="col-span-4 md:col-span-2 px-4 flex justify-between rounded-xl  flex-col">
          <h2 className="bg-stone-100 text-3xl text-center rounded-xl p-2 ">
            {product?.name}
          </h2>
          <div className="flex flex-col  ">
            <div className="p-2"> Name : {product?.name} </div>
            <div className="p-2"> Price : {product?.price} </div>
            <div className="p-2"> Quantity : {product?.count} </div>
            <div className="p-2"> Description : {product?.description} </div>
          </div>
          <div className="flex flex-col ">
            <button
              disabled={statusBtn}
              onClick={addToCartHandler}
              title={
                statusBtn && "The requested amount is more than the stock."
              }
              className="p-3 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-xl bg-gray-800 text-white font-bold"
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="col-span-4 p-5 text-center">
          <p className="font-bold bg-stone-50 rounded-xl p-2">
            {product?.description}
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default ProductPage;
