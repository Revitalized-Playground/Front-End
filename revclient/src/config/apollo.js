// Apollo
import ApolloClient, { InMemoryCache } from "apollo-boost"; // link is not exported from this version of apollo-client


// Endpoint
export const client = new ApolloClient({
    uri: "https://revitalize-development.herokuapp.com/", // Revitalize
    cache: new InMemoryCache(),
    fetchOptions: {
        credentials: 'include'
      },
    request: async (operation) => {
        const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        operation.setContext({
            headers: {
                authorization: token
            }
        })
    }
});
