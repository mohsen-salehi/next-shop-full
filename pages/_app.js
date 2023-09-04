import "@/styles/globals.css";
import {StoreContextProvider} from "@/context/store";

export default function App({ Component, pageProps }) {
  return (
    <StoreContextProvider>
      <Component {...pageProps} />
    </StoreContextProvider>
  );
}
