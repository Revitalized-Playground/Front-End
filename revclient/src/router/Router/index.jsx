import React from 'react';
import { Route } from "react-router-dom";

import LandingPage from "./Landing/LandingPage.jsx";
import Register from "./Register/Register.jsx";
import Login from "./Login/Login.jsx"


const Router = () => {
    return (
        <>
            
			<Route
				exact
				path="/"
				render={() => (
					<LandingPage />
				)}
			/>

            <Route
				// exact
				path="/register"
				render={() => (
					<Register />
				)}
			/>

			<Route
				// exact
				path="/login"
				render={() => (
					<Login />
				)}
			/>


        </>
    );
}

export default Router
