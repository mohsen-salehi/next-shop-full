import React from 'react';
import productItems from "@/data/products.json";
import Link from "next/link";
import Image from "next/image";

function ProductList() {
    return (
                productItems.map((item , index) => (
                    <div key={index} className="col-span-4 md:col-span-1 hover:shadow-xl duration-300 overflow-hidden p-2 rounded-xl bg-white shadow ">
                        <Link href={`/product/${item?.slug}`}>
                            <Image
                                className="rounded-xl overflow-hidden"
                                width={340}
                                height={240}
                                src={item?.image}
                                alt={item?.name}
                                layout="responsive"
                            />
                            <h3 className="w-full p-2 font-bold"> {item?.name}</h3>
                        </Link>
                        <p className="w-full p-2 m-0 bg-stone-100 rounded-xl">{item?.description}</p>
                        <div className="flex w-full p-1 justify-between items-center mt-2">
                            <strong className="p-0 m-0 font-bold">Price : {item?.price}</strong>
                            <button className="bg-gray-800 m-0 p-2 rounded-xl text-white text-sm">Add To Cart</button>
                        </div>
                    </div>
                ))

    );
}

export default ProductList;