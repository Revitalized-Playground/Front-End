import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

// router no authentication
import LandingPage from './routerNoAuth/Landing/LandingPage';
// import ProjectsHome from "./routerNoAuth/ProjectsHome/ProjectsHome";
import Login from "./routerNoAuth/Login/Login";
import Register from "./routerNoAuth/Register/Register";

// router user auth
import CreateProjectWizard from "./routerUser/CreateProjWizard/CreateProjectWizard";

// router project
import ProjectPage from "./routerProject/ProjectPage/ProjectPage"

// utils
import AuthenticateUser from "../utils/AuthenticateUser";


const App = () => (

	<BrowserRouter>

		
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

		{/* <Route
			// exact
			path="/projects"
			render={() => (
				<ProjectsHome />
			)}
		/> */}

		<Route
			// exact
			path="/createproject"
			render={() => (
				<CreateProjectWizard />
			)}
		/>
		
		<Route 
			exact
			path="/oauth/:token"
			component={AuthenticateUser}
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

