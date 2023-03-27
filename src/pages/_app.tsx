import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";
import client from "../../apollo-client";
import NavBar from "@/components/NavBar";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router && router.pathname;
  const path = pathname === "/" ? "home" : pathname.replace("/", "");
  const hideNavBar = path && path.includes("auth");
  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <title>{path}</title>
        </Head>
        {!hideNavBar && <NavBar path={path} />}
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default App;
