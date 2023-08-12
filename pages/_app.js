import '@/styles/globals.css'
import {CartContextProvider} from "@/context/Cart";

export default function App({Component, pageProps}) {
    return (
        <CartContextProvider>
            <Component {...pageProps} />
        </CartContextProvider>
    )


}
