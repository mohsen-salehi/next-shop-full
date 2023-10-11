import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
function Layout({ title, children }) {

  return (
    <>
      <Head>
        <title>{title}-shopping</title>
      </Head>
      <section className="flex flex-col min-h-screen justify-between ">
        <Header />
        <main className="container mx-auto max-w-7xl px-4 my-4">
          {children}
        </main>
        <Footer />
      </section>
    </>
  );
}

export default Layout;
