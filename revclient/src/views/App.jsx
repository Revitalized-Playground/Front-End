import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Nav from '../components/Layout/Nav.jsx';
import Footer from "../components/Layout/Footer.jsx";

import LandingPage from '../views/Landing/LandingPage.jsx';
import ProjectList from "../components/ProjectList/ProjectList.jsx";


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
			exact
			path="/projects"
			render={() => (
				<ProjectList />
			)}
		/>


		<Footer />

	</BrowserRouter>
);


export default App;

