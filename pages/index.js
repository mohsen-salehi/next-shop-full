
import Layout from "@/components/Layout";

import ProductList from "@/components/ProductComponent/productList";
import db from "@/utils/db";
import Product from "@/models/product";
export default function Home({products}) {
  return (
    <Layout title={"home"}>
      <section className="w-full min-h-screen grid grid-cols-4 gap-4">
        <ProductList products={products} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps ()  {
    await db.connect()
    const products = await Product.find().lean()

    return {props : {products : products.map(db.convertToObject)}}
}
