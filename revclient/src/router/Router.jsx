import React from 'react';
import { Route } from "react-router-dom";


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
