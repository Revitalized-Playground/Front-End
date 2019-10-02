import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

// Routes
import LandingPage from "./views/Landing/LandingPage";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import ProjectsHome from "./views/ProjectsHome/ProjectsHome";  // May be deprecated
// import Start from "./views/Start/Start";
import Browse from "./views/Browse/Browse";
import Dashboard from "./views/Dashboard/Dashboard";
import CreateProjectWizard from './views/CreateProjWizard/CreateProjectWizard'
import ProjectPage from './views/ProjectPage/ProjectPage'
import About from './views/About/About';

// Utils
import AuthenticateUser from "./utils/AuthenticateUser";



export const Routes = () => {

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
                exact
                path="/about"
                render={() => (
                    <About />
                )}
            />

            {/* private routes */}

            <Route
                // exact
                path="/dashboard"
                render={() => (
                    <Dashboard />
                )}
            />

            <Route
                path="/projects"
                render={() => (
                    <ProjectsHome />
                )}
            />

            <Route
                path="/project/:id"
                render={() => (
                    <ProjectPage />
                )}
            />

            <Route
                path="/createproject"
                render={() => (
                    <CreateProjectWizard />
                )}
            />

            <Route
                path="/browse"
                render={() => (
                    <Browse />
                )}
            />

        </BrowserRouter>
    );
}



