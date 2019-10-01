// Apollo
import ApolloClient, { InMemoryCache } from "apollo-boost"; // link is not exported from this version of apollo-client
import { createUploadLink } from "apollo-upload-client";


// Create upload link
const link = createUploadLink({
    credentials: 'include'
})

// Endpoint
export const client = new ApolloClient({
    uri: process.env.REACT_APP_SERVER_URL, // Revitalize
    link,
    cache: new InMemoryCache(),
    request: async (operation) => {
        const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        operation.setContext({
            headers: {
                authorization: token
            }
        })
    }
});

