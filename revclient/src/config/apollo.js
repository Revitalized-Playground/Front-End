// Apollo
import ApolloClient, { InMemoryCache } from "apollo-boost"; // link is not exported from this version of apollo-client


// Endpoint
export const client = new ApolloClient({
    uri: "https://revitalize-production.herokuapp.com/", // Revitalize
    cache: new InMemoryCache()
});
