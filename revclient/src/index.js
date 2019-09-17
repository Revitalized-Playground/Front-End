import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";

// import rootReducer from "./redux/reducers/index.js";
import App from "./views/App.jsx";


import "./styles/base.scss";

const client = new ApolloClient({
    uri: "https://revitalize-production.herokuapp.com/"
});




// const store=createStore(
//     rootReducer,
//     // composeWithDevTools(applyMiddleware(thunk, logger)));
//     applyMiddleware(thunk, logger));

const elRoot = document.getElementById('root');


ReactDOM.render(
    // <Provider store={store} >
        // <App />
    // </Provider>,
    // <App />,
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    elRoot 
);

