import Layout from "@/components/Layout";
import { deleteItemAction } from "@/context/actions/deleteItemAction";
import { StoreContext } from "@/context/store";
import Image from "next/image";
import React, { useContext } from "react";

function CartPage() {
  const { state, dispatch } = useContext(StoreContext);
  const { cartItems } = state.cart;
  if (!cartItems) {
    return <div>cart is empty</div>;
  }

  return (
    <Layout title="cart">
      <section className="shadow flex flex-wrap justify-between w-full bg-white rounded-xl p-10">
        <div className="flex flex-wrap w-2/3 p-2">
          {cartItems.map((item) => (
            <div className="w-full justify-between rounded-xl border-b mb-2 p-2 flex flex-wrap">
              <Image
                src={item?.image}
                width={200}
                height={200}
                className="rounded-xl"
                Layout="responsive"
              />
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
        <div className="flex w-1/3 border p-2"></div>
      </section>
    </Layout>
  );
}

export default CartPage;
