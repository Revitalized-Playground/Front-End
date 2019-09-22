import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./views/Landing/LandingPage";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import ProjectsHome from "./views/ProjectsHome/ProjectsHome"; 


export const Routes = props => {

    return (
        <BrowserRouter>
            
            {/* public routes */}
            
            <Route
                exact
                path="/"
                render={() => (
                    <LandingPage />
                )}
		    />
            <Route
                exact
                path="/register"
                render={() => (
                    <Register />
                )}
            />
            <Route
                exact
                path="/login"
                render={() => (
                    <Login />
                )}
            />

            {/* private routes */}

            <Route
                // exact
                path="/projects"
                render={() => (
                    <ProjectsHome />
                )}
            />


        </BrowserRouter>
    );
}



