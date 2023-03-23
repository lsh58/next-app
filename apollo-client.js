import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com", // 예시 endpoint
  cache: new InMemoryCache(),
});

export default client;
