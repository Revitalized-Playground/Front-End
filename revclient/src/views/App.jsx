import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "react-apollo";

import Nav from '../components/Layout/Nav.jsx';
import Footer from "../components/Layout/Footer.jsx";

import LandingPage from '../views/Landing/LandingPage.jsx';
import ProjectsHome from "../views/ProjectsHome/ProjectsHome.jsx";
import Register from "../views/Register/Register.jsx";
import Login from "../views/Login/Login.jsx"
import Users from "../redux/Users.jsx";

import '../styles/base.scss';


// const client = new ApolloClient({
// 	uri: "https://revitalize-production.herokuapp.com/"
// });


const App = () => (
	
		<BrowserRouter>
			<Nav />

			<div>
				<h2>My first Apollo app</h2>
			</div>

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

			<Footer />

		</BrowserRouter>

);


export default App;

