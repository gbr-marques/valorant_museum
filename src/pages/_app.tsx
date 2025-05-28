import "@/styles/globals.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import type { AppProps } from "next/app";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import AppFooter from "@/components/homeSections/defaults/AppFooter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>
      <Component {...pageProps} />
      <AppFooter></AppFooter>
    </PrimeReactProvider>
  );
}
