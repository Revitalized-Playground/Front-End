import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Nav from '../components/Layout/Nav.jsx';
import Footer from "../components/Layout/Footer.jsx";

import LandingPage from '../views/Landing/LandingPage.jsx';
import ProjectsHome from "../views/ProjectsHome/ProjectsHome.jsx";
import Register from "../views/Register/Register.jsx";
<<<<<<< HEAD
import Login from "../views/Login/Login"
import CreateProjectWizard from './CreateProjWizard/CreateProjectWizard.jsx';
import ProjectPage from './ProjectPage/ProjectPage'
=======
import Login from "../views/Login/Login.jsx"
import Users from "../redux/Users.jsx";

// import Router from "../router/Router.jsx";
// import RouterAuth from "../router/RouterAuth.jsx";

>>>>>>> 69b07f35dbe3213e5c2c3071530e01840b494305

import '../styles/base.scss';



const App = () => (
<<<<<<< HEAD
	<BrowserRouter>
		<Nav />

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

