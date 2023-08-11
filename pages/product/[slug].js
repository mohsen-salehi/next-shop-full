import React from 'react';
import {useRouter} from "next/router";
import Layout from "@/components/Layout";
import Image from "next/image";
import productItems from "@/data/products.json"

function ProductPage() {
    const {query} = useRouter()
    const {slug} = query

    const product = productItems.find(item => item.slug === slug)

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
                        <div className="p-2"> Quantity : {product?.qty} </div>
                        <div className="p-2"> Description : {product?.description} </div>
                    </div>
                    <div className="flex flex-col ">
                        <button className="p-3 rounded-xl bg-gray-800 text-white font-bold">
                            Add To Cart
                        </button>
                    </div>
                </div>
                <div className="col-span-4 p-5 text-center">
                   <p className="font-bold bg-stone-50 rounded-xl p-2">
                       {
                           product?.description
                       }
                   </p>
                </div>
            </section>
        </Layout>
    )
}

export default ProductPage;