import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
function Layout({ title, children }) {

  return (
    <>
      <Head>
        <title>{title ? title.toString() : null}-shopping</title>
      </Head>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            limit={4}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
      <section className="flex flex-col min-h-screen justify-between ">
        <Header />
        <main className="container min-h-screen mx-auto max-w-7xl px-4 my-4">
          {children}
        </main>
        <Footer />
      </section>
    </>
  );
}

export default Layout;
