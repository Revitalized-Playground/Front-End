import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from '../views/Landing/LandingPage.jsx';
import ProjectsHome from "../views/ProjectsHome/ProjectsHome.jsx";
import Register from "../views/Register/Register.jsx";

import Login from "../views/Login/Login"
import Users from "../redux/Users.jsx";
import CreateProjectWizard from './CreateProjWizard/CreateProjectWizard.jsx';
import ProjectPage from './ProjectPage/ProjectPage'




// import Router from "../router/Router.jsx";
// import RouterAuth from "../router/RouterAuth.jsx";



import '../styles/base.scss';



const App = () => (

	<BrowserRouter>
		<Route
			exact
			path="/"
			render={() => (
				<LandingPage />
			)}
		/>

		<Route
			// exact
			path="/projects"
			render={() => (
				<ProjectsHome />
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
		<Route
			// exact
			path="/users"
			render={() => (
				<Users />
			)}
		/>
		<Route
			// exact
			path="/createproject"
			render={() => (
				<CreateProjectWizard />
			)}
		/>
		<Route
			// exact
			path="/project"
			render={() => (
				<ProjectPage />
			)}
		/>

		{/* <Footer /> */}

	</BrowserRouter>

);


export default App;

