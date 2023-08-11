import Layout from "@/components/Layout";

import ProductList from "@/components/ProductComponent/productList";
export default function Home() {
  return (
  <Layout title={"home"}>
    <section className="w-full  grid grid-cols-4 gap-4">
      <ProductList/>
    </section>
  </Layout>
  )
}
