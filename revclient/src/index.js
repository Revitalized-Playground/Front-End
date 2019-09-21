import React from 'react';
import ReactDOM from 'react-dom';

// Apollo
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./config/apollo.js";

import App from "./routes/App.jsx";


import "./styles/base.scss";


const elRoot = document.getElementById('root');
console.log(process.env)

ReactDOM.render(
    <ApolloProvider client={client} >
        <App />
    </ApolloProvider>,
    elRoot 
);

