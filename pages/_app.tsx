import type { AppProps } from "next/app";
import Head from "next/head";
import { SWRConfig } from "swr";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";

// helpers
import fetch from "src/helpers/api/customFetch";
import { API_URL } from "src/helpers/constants";
import apolloClient from "../src/helpers/apolloClient";

//assets
import "draft-js/dist/Draft.css";
import "../src/assets/scss/global.scss";
import "react-toastify/dist/ReactToastify.css";


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Rate it</title>
    </Head>
    <ApolloProvider client={apolloClient}>
      <SWRConfig
        value={{ fetcher: (url: string) => fetch({ url: `${API_URL}${url}` }).then(resp => resp) }}
      >
        <Component {...pageProps} />
        <ToastContainer/>
      </SWRConfig>
    </ApolloProvider>
  </>
}

export default MyApp
