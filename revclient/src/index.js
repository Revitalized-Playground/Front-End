import React from 'react';
import ReactDOM from 'react-dom';

// Apollo
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./config/apollo.js";

import App from "./App.jsx";

import "./styles/base.scss";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import "../node_modules/slick-carousel/slick/slick.scss";
import "../node_modules/slick-carousel/slick/slick-theme.scss";


const elRoot = document.getElementById('root');

ReactDOM.render(
    <ApolloProvider client={client} >
        <App />
    </ApolloProvider>,
    elRoot 
);

