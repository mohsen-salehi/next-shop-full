import "@/styles/globals.css";
import { StoreContextProvidor } from "@/context/store";

export default function App({ Component, pageProps }) {
  return (
    <StoreContextProvidor>
      <Component {...pageProps} />
    </StoreContextProvidor>
  );
}
