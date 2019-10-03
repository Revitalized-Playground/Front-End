// Apollo reimagined
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
// import { createHttpLink } from 'apollo-link-http'; // DEPRECATED WITH APOLLO UPLOAD
// import { ApolloLink } from "apollo-link";



const httpLink = createUploadLink({
    uri: process.env.REACT_APP_SERVER_URL
});

const authLink = setContext(({ headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});


export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

