import "@/styles/globals.css";
import {StoreContextProvider} from "@/context/store";
import {SessionProvider, useSession} from "next-auth/react"
import {useRouter} from "next/router";

export default function App({Component, pageProps: {session, ...pageProps}}) {
    return (
        <SessionProvider session={session}>
            <StoreContextProvider>
                {Component.auth ? (
                    <Auth>
                        <Component {...pageProps} />
                    </Auth>
                ) : (
                    <Component {...pageProps} />
                )}
            </StoreContextProvider>
        </SessionProvider>
    );
}

function Auth({children}) {
    const router = useRouter()
    const {status} = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/unauthoraized')
        }
    })
    if (status === "loading") {
        return "Loading"
    } else {
        return children
    }
}