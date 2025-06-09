import "@/styles/globals.css";
import "primereact/resources/themes/lara-light-pink/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import type { AppProps } from "next/app";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import AppFooter from "@/components/defaults/AppFooter";
import AppHeader from "@/components/defaults/AppHeader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>
      <AppHeader></AppHeader>
      <Component {...pageProps} />
      <AppFooter></AppFooter>
    </PrimeReactProvider>
  );
}
 