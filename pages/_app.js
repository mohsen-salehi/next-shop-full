import "@/styles/globals.css";
import {StoreContextProvider} from "@/context/store";
import {SessionProvider} from "next-auth/react"

export default function App({Component, pageProps : {session , ...pageProps}}) {
    return (
        <SessionProvider session={session}>
            <StoreContextProvider>
                <Component {...pageProps} />
            </StoreContextProvider>
        </SessionProvider>
    );
}
