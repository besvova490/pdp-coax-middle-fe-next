import type { AppProps } from "next/app";
import Head from "next/head";
import { SWRConfig } from "swr";
import "draft-js/dist/Draft.css";

// helpers
import fetch from "src/helpers/api/customFetch";
import { API_URL } from "src/helpers/constants";

//assets
import "../src/assets/scss/global.scss";


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Rate it</title>
    </Head>
    <SWRConfig
      value={{ fetcher: (url: string) => fetch({ url: `${API_URL}${url}` }).then(resp => resp) }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  </>
}

export default MyApp
