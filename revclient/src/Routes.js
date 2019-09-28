import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

// Routes
import LandingPage from "./views/Landing/LandingPage";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import ProjectsHome from "./views/ProjectsHome/ProjectsHome";
import Browse from "./views/Browse/Browse";
import Dashboard from "./views/Dashboard/Dashboard";

// Utils
import AuthenticateUser from "./utils/AuthenticateUser";

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
            <Route
                exact
                path="/oauth/:token"
                component={AuthenticateUser}
		    />


            <Route
                // exact
                path="/dashboard"
                render={() => (
                    <Dashboard />
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

            <Route
                // exact
                path="/browse"
                render={() => (
                    <Browse />
                )}
            />

        </BrowserRouter>
    );
}



