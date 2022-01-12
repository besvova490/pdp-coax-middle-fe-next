import type { AppProps } from "next/app";
import "draft-js/dist/Draft.css";

//assets
import "../src/assets/scss/global.scss";


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
