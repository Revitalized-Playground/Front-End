import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

// router no authentication
import LandingPage from './routerNoAuth/Landing/LandingPage';
import ProjectsHome from "./routerNoAuth/ProjectsHome/ProjectsHome";

// router user auth
import CreateProjectWizard from "./routerUser/CreateProjWizard/CreateProjectWizard";
import Login from "./routerUser/Login/Login";
import Register from "./routerUser/Register/Register";

// router project
import ProjectPage from "./routerProject/ProjectPage/ProjectPage"


// import Users from "../redux/Users.jsx";

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
			path="/project"
			render={() => (
				<ProjectPage />
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
			path="/createproject"
			render={() => (
				<CreateProjectWizard />
			)}
		/>

{/* 		
		<Route
			// exact
			path="/users"
			render={() => (
				<Users />
			)}
		/>

*/}

	</BrowserRouter>

);


export default App;

