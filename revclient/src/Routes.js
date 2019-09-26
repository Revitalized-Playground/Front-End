import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Routes
import LandingPage from './views/Landing/LandingPage';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import ProjectsHome from './views/ProjectsHome/ProjectsHome';
import ProjectPage from './views/ProjectPage/ProjectPage';
import CreateProjectWizard from './views/CreateProjWizard/CreateProjectWizard';
import Start from './views/Start/Start';

// Protected Routes
import Dashboard from "./views/Dashboard/Dashboard";
import UserDashboard from "./views/Dashboard/User/UserDashboard";

// Utils
import AuthenticateUser from './utils/AuthenticateUser';



export const Routes = props => {
	return (
		<BrowserRouter>
			{/* public routes */}

			<Route exact path="/" render={() => <LandingPage />} />
			<Route exact path="/register" render={() => <Register />} />
			<Route exact path="/login" render={() => <Login />} />
			<Route exact path="/oauth/:token" component={AuthenticateUser} />
			{/* private routes */}

			<Route
				// exact
				path="/projects"
				render={() => <ProjectsHome />}
			/>
			<Route
				// exact
				path="/project"
				render={() => <ProjectPage />}
			/>

			<Route
				// exact
				path="/createproject"
				render={() => <CreateProjectWizard />}
			/>

			<Route 
				path="/start"
				render={() => <Start />}
			/>

			<Route 
				path="/user/dashboard"
				render={() => <Dashboard />}
			/>

		</BrowserRouter>
	);
};

