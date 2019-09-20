import React from 'react';
import ReactDOM from 'react-dom';

// Apollo
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./config/apollo.js";

// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";

// import rootReducer from "./redux/reducers/index.js";
// import App from "./views/App.jsx";
import App from "./routes/App.jsx";


import "./styles/base.scss";



const elRoot = document.getElementById('root');


ReactDOM.render(
    <ApolloProvider client={client} >
            <App />
    </ApolloProvider>,
    elRoot 
);

