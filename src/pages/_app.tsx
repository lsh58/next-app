import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";
import client from "../../apollo-client";
import NavBar from "@/components/NavBar";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideNavBar = router?.pathname?.includes("auth");
  return (
    <>
      <ApolloProvider client={client}>
        {!hideNavBar && <NavBar />}
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default App;
