import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Nav from '../components/Layout/Nav.jsx';
import Footer from "../components/Layout/Footer.jsx";

import LandingPage from '../views/Landing/LandingPage.jsx';
import ProjectsHome from "../views/ProjectsHome/ProjectsHome.jsx";
import Register from "../views/Register/Register.jsx";
import Login from "../views/Login/Login"

import '../styles/base.scss';



const App = () => (
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

		<Footer />

	</BrowserRouter>
);


export default App;

